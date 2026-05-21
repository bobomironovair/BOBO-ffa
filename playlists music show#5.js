VideoPlaybackQuality 
// Get all playlist cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const playlistId = card.getAttribute('data-playlist');
            const url = `https://music.youtube.com/playlist?list=PLG5S1cXoV-2HPnsTyWqtx7CCPFlB3Pd5a&si=2_ifOxXv_IASsA82`;
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
            const url = `https://music.youtube.com/playlist?list=PLG5S1cXoV-2HPnsTyWqtx7CCPFlB3Pd5a&si=2_ifOxXv_IASsA82`;
            window.open(url, '_blank');
        });
    });
});