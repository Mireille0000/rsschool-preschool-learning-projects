let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=2045df24e76300706839bdb4fc7f3201&tags=butterfly&tag_mode=all&extras=url_m&format=json&nojsoncallback=1`;
//   photos
const urlTest = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=2045df24e76300706839bdb4fc7f3201&extras=url_m&format=json&nojsoncallback=1`;

// variables
const galery = document.querySelector(".galery")
const image = document.querySelectorAll(".image");
const searchImage = document.querySelector(".search_image");
const input = document.querySelector("input");
const searchIcon = document.querySelector(".search-icon");
const cross = document.querySelector(".cross");

// ??
let currentPage = 1;
let searchTerm = null;


const putImages = (images) => {
    galery.innerHTML += images.map(picture => 
        `<div><img class="image" src="${picture.url_m}" alt="image" style="width: 100%; height: 200px; cursor: pointer"></div>`).join("")
}

const getImages = () => {
    fetch(url).then(response => response.json()).then(data => {
        putImages(data.photos.photo);
    })
}
getImages();

// async function getData() {
//     const res = await fetch(url);
//     const data = await res.json();

//     let arr = [];
//     for (let i = 0; i < 30; i++) {
//     const link = data.photos.photo[i].url_m.replace('https://live.staticflickr.com/65535/', '');
//     arr.push(link)
//     }

//     console.log(data);
//     let i = 0;
//     while(i < arr.length) {
//         i++;
//         return image.forEach(item => item.style = `background: url(https://live.staticflickr.com/65535/${arr[i]})50% center / cover no-repeat; height: 200px`);
//     }
//   }
//   getData();

const loadImages = (event) => {
    if(event.key === "Enter") {
        currentPage = 1;
        value = event.target.value;
        galery.innerHTML = "";
        url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=2045df24e76300706839bdb4fc7f3201&tags=${value}&tag_mode=all&extras=url_m&format=json&nojsoncallback=1`
        getImages(url)
    }
}

searchImage.addEventListener("keyup", loadImages);

searchIcon.addEventListener("click", () => {
    let value = document.getElementById("input").value;
    currentPage = 1;
    galery.innerHTML = "";
    url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=2045df24e76300706839bdb4fc7f3201&tags=${value}&tag_mode=all&extras=url_m&format=json&nojsoncallback=1`
    getImages(url);
    console.log(value);
})  

cross.addEventListener("click", () => {
    document.getElementsByName("search")[0].value = "";
})