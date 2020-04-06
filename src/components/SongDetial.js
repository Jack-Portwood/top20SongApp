import React from 'react';

const SongDetail = (props) => {
    if(!props.song) return null;
    return(
        <div>
            <h1>Song Title: {props.song['im:name'].label}</h1>
            <h1>Ablum Name: {props.song['im:collection']['im:name'].label}</h1>
            <h1>Postion in chart: {props.song.category.attributes['im:id']}</h1>
            <h1>Genre: {props.song.category.attributes.label}</h1>
            <img src={props.song['im:image'][2].label} width="400" alt="cover"/>

        </div>
    );
}

export default SongDetail; 