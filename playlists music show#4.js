VideoPlaybackQualityPicker
// playlists music show.js
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const playlistId = card.getAttribute('data-playlist');
            const url = `https://music.youtube.com/playlist?list=PLG5S1cXoV-2FEhcZbHz8STAumYk3jA0-v&si=m-3SOlLHfeJq6_ho`;
            window.open(url, '_blank');
        });
    });
});
RemotePlaybackQualityPicker
// playlists music show.js
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const playlistId = card.getAttribute('data-playlist');
            const url = `https://music.youtube.com/playlist?list=PLG5S1cXoV-2FEhcZbHz8STAumYk3jA0-v&si=m-3SOlLHfeJq6_ho`;
            window.open(url, '_blank');
        });
    });
});