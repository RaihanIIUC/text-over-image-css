import React from 'react'

const ImageBlockOverImage = () => {
    return (
        <div className="container-six">
            <img src="https://picsum.photos/1400/400" alt="snow" width="100%" />
  <div className="img-block">
          <img className='img-1' src="https://picsum.photos/300/400" alt="snow" width="30%" />

          <img  className='img-2' src="https://picsum.photos/300/400" alt="snow" width="30%" />
  </div>
</div>

    )
}

export default ImageBlockOverImage
