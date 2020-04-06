import React from 'react';
import SongSelector from '../components/SongSelector';

class SongContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            selectedSongAlpha3Code: ""
        };
        this.handleSongSelected = this.handleSongSelected.bind(this);
    }

    componentDidMount(){
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

        fetch(url)
        .then(res => res.json())
        .then(songs => this.setState({songs: songs}))
        .catch(err => console.error);
    }

    handleSongSelected(alpha3Code) {
        this.setState({selectedSongAlpha3Code: alpha3Code})
    }

    render() {
        const selectedSong = this.state.songs.find(song => song.alpha3Code === 
            this.state.selectedSongAlpha3Code)
    
        return(
            <div>
                <h2> Song Container</h2>
                <SongSelector songs={this.state.songs} onSongSelected ={ this.handleCountrySelected}/>
            </div>

        );
    }
}

export default SongContainer; 