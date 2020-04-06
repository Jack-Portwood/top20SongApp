import React from 'react';

const SongDetail = (props) => {
    if(!props.song) return null;
    return(
        <div>
            <h2>Song Title: {props.song['im:name'].label}</h2>
            <h2>Ablum Name: {props.song['im:collection']['im:name'].label}</h2>
            <h2>Postion in chart: {props.song.category.attributes['im:id']}</h2>
            <h2>Genre: {props.song.category.attributes.label}</h2>
            <img src={props.song['im:image'][2].label} width="400" alt="cover"/>

        </div>
    );
}

export default SongDetail; 