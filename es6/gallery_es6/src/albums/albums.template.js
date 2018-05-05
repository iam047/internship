import Util from '../services/util'

let albumsTemplate = albums => {
  return Util.html`
    <ul rendered class="albums-list">
        ${albums.map(album => {
            if (album !== null){
              return Util.html`
                <li id='${album._id}' class="album">
                    <a href="#album/${album._id}">
                        <h3 class="album-title">
                           Album ${album.title} 
                        </h3>
                        <h3>
                        photo counter ${Util.count(album.photos)}
                        </h3>
                    </a>
                    <button class="remove-album">X</button>
                </li>`
            }
          }) 
        }
    </ul>`;
};

export { albumsTemplate };