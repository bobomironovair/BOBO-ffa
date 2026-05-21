VideoPlaybackQualityPicker
// playlists music show.js
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const playlistId = card.getAttribute('data-playlist');
            const url = `https://music.youtube.com/playlist?list=PLG5S1cXoV-2G_Zd8lybU9Tf3xBkb_-iZR&si=ul3dMDfxiibJVzZt`;
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
            const url = `https://music.youtube.com/playlist?list=PLG5S1cXoV-2G_Zd8lybU9Tf3xBkb_-iZR&si=ul3dMDfxiibJVzZt`;
            window.open(url, '_blank');
        });
    });
});