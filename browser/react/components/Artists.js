import React from 'react';
import {Link} from 'react-router';


const Artists = (props) => {

  const albums = props.albums;
  const selectAlbum = props.selectAlbum;

  return (
    <div>
      <h3>Artists</h3>
        <div className="list-group">
        {
          this.props.artists.map(artist => {
            return (
              <div className="list-group-item" key={artist.id}>
                {/* determine where to actually Link to later! */}
                <Link to="">{ artist.name }</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Albums;
