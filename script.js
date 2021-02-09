const submitUserInput = () => {
    const searchValue = document.getElementById("searchValue").value;
    // console.log(searchValue);
    fetch(`https://api.lyrics.ovh/suggest/${searchValue}`)
        .then(res => res.json())
        .then(data => displaySongToUser(data.data))
};

const displaySongToUser = (songs) => {
    //console.log(songs);

    const songContainer = document.getElementById("songContainer")
    songs.forEach(song => {
        //console.log(song.artist);
        // console.log(song.title);

        const songDiv = document.createElement('div');
        songDiv.className = "single-result row align-items-center my-3 p-3";

        songDiv.innerHTML = `
                    <div class="col-md-9">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        <audio controls>
                            <source src = "${song.preview}" type = "audio/mpeg">
                        </audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button class="btn btn-success">Get Lyrics</button>
                    </div>
        `;
        songContainer.appendChild(songDiv);
    });

}
