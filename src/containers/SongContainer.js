import React from 'react';
import SongSelector from '../components/SongSelector';
import SongDetial from '../components/SongDetial';

class SongContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            selectedId: ""
        };
        this.handleSongSelected = this.handleSongSelected.bind(this);
    }

    componentDidMount(){
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

        fetch(url)
        .then(res => res.json())
        .then(songsApi => this.setState({ songs: songsApi.feed.entry })) ///whats this doing?
        .catch(err => console.error);
    }

    handleSongSelected(id) {
        this.setState({selectedSongId: id})
    }

    render() {
        const selectedSong = this.state.songs.find(song => song.id.attributes['im:id'] === 
            this.state.selectedSongId)
    
        return(
            <div>
                <h2> Song Container</h2>
                <SongSelector songs={this.state.songs} onSongSelected ={ this.handleSongSelected}/>
                <SongDetial song={selectedSong}/>
            </div>

        );
    }
}

export default SongContainer; 