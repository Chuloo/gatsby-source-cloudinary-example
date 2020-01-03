import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageGallery from "../components/ImageGallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Image Gallery</h1>
    <p>Here's a Gatsby site with optimized images in a masonry grid, served from <a href="https:cloudinary.com" target="_blank" rel="noopener noreferrer">Cloudinary</a></p>
    <div style={{ marginBottom: `1.45rem` }}>
      <ImageGallery/>
    </div>
  </Layout>
)

export default IndexPage
