import React from 'react'

function ImageCard({imagePath}) {
    return (
        <img src={imagePath} width="200" height="100" />
    )
}

export default ImageCard