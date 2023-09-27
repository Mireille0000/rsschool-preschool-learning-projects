const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=2045df24e76300706839bdb4fc7f3201&tags=spring,nature&tag_mode=all&extras=url_m&format=json&nojsoncallback=1`;
//   photos
const urlTest = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=2045df24e76300706839bdb4fc7f3201&extras=url_m&format=json&nojsoncallback=1`
// https://www.flickr.com/services/api/flickr.photos.search.html

const galery = document.querySelector(".galery")
const image = document.querySelectorAll(".image");

const putImages = (images) => {
    galery.innerHTML += images.map(picture => 
        `<div><img class="image" src="${picture.url_m}" alt="image" style="width: 100%; height: 200px"></div>`).join("")
}

const getImages = () => {
    fetch(url).then(response => response.json()).then(data => {
        putImages(data.photos.photo);
        console.log(data.photos.photo);
        console.log(data);
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