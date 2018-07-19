import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import { connect } from 'react-redux';
import { fetchData } from '../actions/AlbumAction';


class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
    this.props.fetchData();
  }

  renderAlbums() {
    return this.props.data.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);


    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      data: state.album
    }
}
export default connect(mapStateToProps, {fetchData})(AlbumList);
