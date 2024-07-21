 function playVideo(videoSrc) {
    var playerHtml = '<iframe width="600" height="337.5" src="' + videoSrc + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    var firstThumbnailWrapper = this.querySelector('.eytg-item-first .thumbnail-wrapper');
    firstThumbnailWrapper.innerHTML = playerHtml;
    this.querySelector('.eytg-item-first').classList.add('video-playing');
}
var mainContainers = document.querySelectorAll('.eytg_main_container');
mainContainers.forEach(function(container) {
    var galleryItems = container.querySelectorAll('.easy_youtube_gallery.eytg-lightbox-items');
    galleryItems.forEach(function(galleryItem) {
        var firstThumbnail = galleryItem.querySelector('.eytg-item-first .thumbnail-wrapper');
        var restoreButton = galleryItem.querySelector('.restore-button');
        firstThumbnail.addEventListener('click', function() {
            var videoId = this.getAttribute('data-video-id');
            var videoSrc = "https://www.youtube.com/embed/" + videoId + "?rel=0&autoplay=1&hl=ar";
            playVideo.call(container, videoSrc);
        });
        if (restoreButton) {
            restoreButton.addEventListener('click', function() {
                var videoSrc = this.getAttribute('data-video-src') + "&autoplay=1&hl=ar";
                playVideo.call(container, videoSrc);
            });
        }
        var midThumbnails = galleryItem.querySelectorAll('.eytg-item-mid .thumbnail-wrapper');
        midThumbnails.forEach(function(thumbnail) {
            thumbnail.addEventListener('click', function() {
                var videoId = this.getAttribute('data-video-id');
                var videoSrc = "https://www.youtube.com/embed/" + videoId + "?rel=0&autoplay=1&hl=ar";
                playVideo.call(container, videoSrc);
            });
        });
    });
});