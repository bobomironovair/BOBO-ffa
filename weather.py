import os
import tkinter as tk
from tkinter import messagebox
import requests
import urllib.request
from io import BytesIO
from PIL import Image, ImageTk

# ---------------- CONFIGURATION ----------------
API_KEY = os.environ.get("OPENWEATHER_API_KEY", "YOUR_API_KEY_HERE")
BASE_URL = "https://openweathermap.org"

# ---------------- FUNCTIONS ----------------
def get_weather():
    city = city_entry.get().strip()
    
    if not city:
        messagebox.showwarning("אזהרה", "אנא הזן שם של עיר.")
        return
        
    if API_KEY == "YOUR_API_KEY_HERE":
        messagebox.showerror("שגיאה", "אנא הכנס את מפתח ה-API שלך בקוד.")
        return

    params = {
        "q": city,
        "appid": API_KEY,
        "units": "metric"
    }

    try:
        response = requests.get(BASE_URL, params=params)
        data = response.json()

        if response.status_code == 200:
            city_name = data["name"]
            country = data["sys"]["country"]
            temp = data["main"]["temp"]
            feels_like = data["main"]["feels_like"]
            humidity = data["main"]["humidity"]
            description = data["weather"][0]["description"].capitalize()
            
            # --- שלב האייקון החדש ---
            icon_code = data["weather"][0]["icon"]
            icon_url = f"https://openweathermap.org{icon_code}@2x.png"
            
            try:
                # הורדת התמונה מהאינטרנט והמרתה לפורמט ש-Tkinter מבין
                with urllib.request.urlopen(icon_url) as url:
                    image_data = url.read()
                im = Image.open(BytesIO(image_data))
                image = ImageTk.PhotoImage(im)
                
                # עדכון הלייבל של האייקון ושמירת רפרנס (חשוב למניעת היעלמות התמונה)
                icon_label.config(image=image)
                icon_label.image = image
            except:
                icon_label.config(image="", text="⚠️") # גיבוי במקרה של כשל בטעינת התמונה
            
            # עדכון טקסטים
            location_label.config(text=f"📍 {city_name}, {country}")
            temp_label.config(text=f"{temp}°C")
            desc_label.config(text=description)
            details_label.config(text=f"מרגיש כמו: {feels_like}°C  |  לחות: {humidity}%")
        else:
            error_msg = data.get("message", "העיר לא נמצאה").capitalize()
            messagebox.showerror("שגיאה", f"שגיאה {response.status_code}: {error_msg}")
            
    except requests.exceptions.RequestException:
        messagebox.showerror("שגיאה", "נכשל החיבור לרשת. בדוק את החיבור לאינטרנט.")

# ---------------- UI SETUP ----------------
root = tk.Tk()
root.title("אפליקציית מזג אוויר")
root.geometry("400x520") # הגדלנו מעט את הגובה בשביל האייקון
root.configure(bg="#2c3e50")

# Fonts
FONT_TITLE = ("Helvetica", 14, "bold")
FONT_LARGE = ("Helvetica", 36, "bold")
FONT_MED = ("Helvetica", 12)

# Input Frame
input_frame = tk.Frame(root, bg="#2c3e50")
input_frame.pack(pady=20)

city_entry = tk.Entry(input_frame, font=FONT_TITLE, width=18, justify="center")
city_entry.grid(row=0, column=1, padx=10)
city_entry.focus()

search_btn = tk.Button(input_frame, text="חיפוש 🔍", font=("Helvetica", 11, "bold"), 
                       bg="#3498db", fg="white", activebackground="#2980b9", 
                       activeforeground="white", command=get_weather)
search_btn.grid(row=0, column=0)

root.bind('<Return>', lambda event: get_weather())

# Weather Display Elements
location_label = tk.Label(root, text="", font=FONT_TITLE, bg="#2c3e50", fg="#ecf0f1")
location_label.pack(pady=5)

# לייבל ייעודי להצגת האייקון הגרפי
icon_label = tk.Label(root, bg="#2c3e50")
icon_label.pack(pady=5)

temp_label = tk.Label(root, text="", font=FONT_LARGE, bg="#2c3e50", fg="#e74c3c")
temp_label.pack(pady=5)

desc_label = tk.Label(root, text="", font=FONT_TITLE, bg="#2c3e50", fg="#f1c40f")
desc_label.pack(pady=5)

details_label = tk.Label(root, text="", font=FONT_MED, bg="#2c3e50", fg="#bdc3c7")
details_label.pack(pady=15)

root.mainloop()