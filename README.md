## Photos From Here by TL Williams
[GitLab URL](https://tlwilliams895.github.io/photo_randomizer_js/)

Purpose: Create a web application to display photos that were taken near user's current geographic location using the Flickr API and fetch API.

The app will use the geolocation API to determine the user’s location -- in latitude and longitude --, then use the Flickr API to obtain a list of photos that were taken near that location.

Display the first photo on the page, along with a link to that photo’s Flickr page and provide some method of advancing through the photos.

### Project Requirements
Your program will follow these general steps:
    * Get the geographic location from the browser
    * Construct the query URL
    * Use fetch to send the request to Flickr
    * Process the response data into an object
    * Use the values in the response object to construct an image source URL
    * Display the first image on the page
    * In response to some event, -- e.g. a button click or a setInterval --, show the next image in the collection
