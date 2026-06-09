document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Use the data-playlist attribute if available, otherwise fallback to the default URL
            const playlistId = card.getAttribute('data-playlist');
            const url = playlistId 
                ? `https://music.youtube.com/playlist?list=${playlistId}`
                : `https://music.youtube.com/playlist?list=PLG5S1cXoV-2HXFKe2--SZisx4HLd0li_Q&si=alU-xHmiOAobLU94`;
            window.open(url, '_blank');
        });
    });
});