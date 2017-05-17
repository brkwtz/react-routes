import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import Albums from './Albums';
import Album from '../containers/Album';

export default class Artist extends Component {

  componentDidMount() {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);

    axios.get(`/api/artists/${artistId}`)
    .then(res => res.data)
    .then(artist => this.setState({artist}))
    .catch(console.error);

    axios.get(`/api/artists/${artistId}/albums`)
    .then(res => res.data)
    .then(albums => {
      console.log('albums returned', albums);
      return albums;
    })
    .then(albums => this.setState({albums:albums}))
    .catch(console.error);
  }

  render() {
    const artist = this.props.artist;
    const selectAlbum = this.props.selectAlbum;
    const albums = this.props.albums;

    console.log(albums);

      return (
        <div>
          <h3>{artist.name}</h3>
          { albums.length > 1 ?
            <Albums albums={albums}/> :
            <Album album={albums[0]}/>
          }
        </div>
    );
  }
}
