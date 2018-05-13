angular.module('video-player')

  .component('search', {
    bindings: {
      updateVideos: '<'
    },
    
    templateUrl: 'src/templates/search.html',
    controller: (
      this.onClick = function
        )
      youTube.getData(this.input, this.updateVideo)
  });
