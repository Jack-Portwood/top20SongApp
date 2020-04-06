import React from 'react';

const SongSelector = (props) => {
    const options = props.songs.map(song => {
        return <option value={song.alpha3Code} key={song.alpha3Code}>{song.name}</option>
    })

    function handleChange(event) {
        props.onCountrySelected(event.target.value)
    }

    return (
        <select id="song-selector" onChange={handleChange} defaultValue="default">
            <option disabled value="default"> Choose a choon...</option>
        </select>
    )
}


export default SongSelector