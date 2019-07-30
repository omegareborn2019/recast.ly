var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    type: 'video',
    contentType: 'application/json',
    part: 'snippet',
    q: options.query,
    maxResults: options.max,
    key: options.key,
    videoEmbeddable: 'true',
    // success: callback,
  }).done(data => callback(data.items));
};

export default searchYouTube;
