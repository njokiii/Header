document.addEventListener('DOMContentLoaded', () => {
    const mainVideoPlayer = document.getElementById('mainVideoPlayer');
    const rewindButton = document.getElementById('rewind');
    const forwardButton = document.getElementById('forward');
    const videoThumbnails = document.querySelectorAll('.vid');

    rewindButton.addEventListener('click', () => {
        mainVideoPlayer.currentTime -= 10;
    });

    forwardButton.addEventListener('click', () => {
        mainVideoPlayer.currentTime += 10; 
    });

    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const src = thumbnail.getAttribute('data-src');
            mainVideoPlayer.src = src;
            mainVideoPlayer.play();
        });
    });
});
