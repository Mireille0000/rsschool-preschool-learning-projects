let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=2045df24e76300706839bdb4fc7f3201&tags=mountain, nature&tag_mode=all&extras=url_m&format=json&nojsoncallback=1`;

const galery = document.querySelector(".galery")
const image = document.querySelectorAll(".image");
const searchImage = document.querySelector(".search_image");
const input = document.querySelector("input");
const searchIcon = document.querySelector(".search-icon");
const cross = document.querySelector(".cross");

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

const loadImages = (event) => {
    if(event.key === "Enter") {
        value = event.target.value;
        galery.innerHTML = "";
        url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=2045df24e76300706839bdb4fc7f3201&tags=${value}&tag_mode=all&extras=url_m&format=json&nojsoncallback=1`
        getImages(url)
    }
}

searchImage.addEventListener("keyup", loadImages);

searchIcon.addEventListener("click", () => {
    let value = document.getElementById("input").value;
    galery.innerHTML = "";
    url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=2045df24e76300706839bdb4fc7f3201&tags=${value}&tag_mode=all&extras=url_m&format=json&nojsoncallback=1`
    getImages(url);
    console.log(value);
})  

cross.addEventListener("click", () => {
    document.getElementsByName("search")[0].value = "";
})

console.log("Оценка: 60/60, все требования к заданию выполнены, дополнительный функционал не добавлялся")

console.log(` 2. input; 3. images size; 4. self-check; 5. git hub manipulations (pull requests and merge)`)
