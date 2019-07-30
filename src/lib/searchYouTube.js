var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'application/json',
    query: options.query,
    max: options.max,
    key: options.key,
    success: callback,
  });
};

export default searchYouTube;
