angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];

      this.selectVideo = function(event) {
        var selectedVideo = event.target.innerText;
        this.videos.forEach(function(video) {
          if (video.snippet.title === selectedVideo) {
            this.currentVideo = video;
          }
        }.bind(this));
      };
    }
  });  
 