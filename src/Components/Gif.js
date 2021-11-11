import React from 'react';

export default function Gif (props) {
    const url=props;
    return (
        <div>
            <img src={url} alt=""/>
        </div>
    )
}