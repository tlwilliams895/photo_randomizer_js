// Starter code provide by Randy via Demo
let pageIndex = 1;

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

// const imageUrl = constructImageURL(response.photos.photo[0]);


// Use fetch to send the request to Flickr
function retrievePhotos(coords) {
    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);

    const imagesURL = "https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=44b40b0700e3e2b4cac39a0d304f2007&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=1&text=water& lat=" + coords.latitude + " & lon=" + coords.longitude + " & page=" + pageIndex


    let grabPromise = fetch(imagesURL)
    let dataPromise = grabPromise.then(function (response) {
        return response.json()
    });

    dataPromise.then(function (data) {
        let pictures = constructImageURL(data.photos.photo[0]);
        let imageContainer = document.querySelector(".images");
        imageContainer.src = pictures
    });

};

// Process the response data into an object
function useRealLocation(pos) {
    // console.log(pos);
    retrievePhotos(pos.coords);
    let imgBtn = document.getElementById("photoBtn");
    imgBtn.addEventListener("click", function () {
        retrievePhotos(pos.coords, pageIndex);
        pageIndex++;
    })
};

// Use the values in the response object to construct an image source URL
function useFallbackLocation() {
    retrievePhotos(fallbackLocation);
};

navigator.geolocation.getCurrentPosition(useRealLocation, useFallbackLocation, options);