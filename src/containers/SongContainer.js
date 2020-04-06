import React from 'react';

class SongContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            selectedSongAlpha3Code: ""
        };
    }
    componentDidMount(){
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    }

    render(){
        
        return(
            <div>
                <h2> Song Container</h2>
            </div>

        )
    }
}

export default SongContainer; 