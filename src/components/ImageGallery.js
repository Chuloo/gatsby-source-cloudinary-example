import React from 'react'
import './gallery.css'
import {useStaticQuery, graphql} from 'gatsby'

const ImageGallery = () => {
    const data = useStaticQuery(graphql`
        query CloudinaryImage {
            allCloudinaryMedia {
              edges {
                node {
                  secure_url
                }
              }
            }
          }
          `
    )
    const clImages = data.allCloudinaryMedia.edges

    return (
        <div>
          <div className="image-grid">
            {clImages.map((image, index) => (
                  <div className="image-item" key={`${index}-cl`}>
                    <img src={image.node.secure_url} alt={"no alt :("} />
                  </div>
                ))
            }
          </div>
        </div>
      )
  }

  export default ImageGallery