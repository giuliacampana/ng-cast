angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: (['$scope', 'youTube', function($scope, youTube) {
      this.updateVideos = youTube.getData('beyonce', function(data) {
        console.log("data: ", data)
        this.videos = data;
      }.bind(this));
      this.currentVideo = this.videos[0];

      this.selectVideo = function(event) {
        var selectedVideo = event.target.innerText;
        this.videos.forEach(function(video) {
          if (video.snippet.title === selectedVideo) {
            this.currentVideo = video;
          }
        }.bind(this));
      };
    }])
  });  
 