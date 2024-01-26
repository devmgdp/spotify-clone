const searchInput = document.getElementById("search-input");
const resultArtists = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}


function displayResults(result) {
  resultPlaylist.classList.add("hidden");
  const artistsName = document.getElementById("artist-name");
  const artistsImage = document.getElementById("artist-img");

  result.forEach(element => {
    artistsName.innerText = element.name;
    artistsImage.src = element.urlImg;
  });

  resultArtists.classList.remove("hidden");
}

document.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultPlaylist.classList.add("hidden");
    resultArtists.classList.remove("hidden");
    return;
  }

  requestApi(searchTerm)
});

