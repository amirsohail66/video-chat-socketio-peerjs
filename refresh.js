setInterval(() => {
  fetch("https://audio-video-chat.onrender.com/")
    .then(response => console.log('Audio-video chat server refreshed'))
    .catch(error => console.error('Error refreshing audio-video chat:', error));

  fetch("https://foodmine-eakr.onrender.com/")
    .then(response => console.log('Foodmine server refreshed'))
    .catch(error => console.error('Error refreshing Foodmine:', error));
}, 20000);
