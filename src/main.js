// Starter code provide by Randy via Demo
let options = {
    enableHighAccuracy: true,
    maximumAge: 0
};

// Browser geographic location
const fallbackLocation = {
    latitude: 28.0352964,
    longitude: -82.3892596
};

// Construct the query URL
function constructImageURL(photoObj) {
    return "https://farm" + photoObj.farm +
        ".staticflickr.com/" + photoObj.server +
        "/" + photoObj.id + "_" + photoObj.secret + ".jpg";
};

const photoURL = constructImageURL(response.photos.photo[0]);


// Use fetch to send the request to Flickr
function getFlickrPhotos(coordinates) {
    console.log(`Latitude: ${coordinates.latitude}`);
    console.log(`Longitude: ${coordinates.longitude}`);

    const flickrURL = "https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=44b40b0700e3e2b4cac39a0d304f2007&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=" + coordinates.latitude + "&lon=" + coordinates.longitude + "&text=cats"

    fetch(flickrURL)
        .then(function (response) {
            return response.json(); //hydrate
        })
        .then(displayImages);
};

// Process the response data into an object
function useCurrentLocation(position) {
    console.log(position);
    getFlickrPhotos(position.coordinates);
};

navigator.geolocation.getCurrentPosition(useCurrentLocation, useFallbackLocation, options);

// Use the values in the response object to construct an image source URL
function useFallbackLocation() {
    getFlickrPhotos(fallbackLocation);
};

// Display the first image on the page
function displayImages(dataObj) {
    console.log(dateObj);
    console.log(constructImageURL(dataObj.photo.photo[0]));
};