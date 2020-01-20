import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Blog = () => {
    const data = useStaticQuery(graphql`
    {
      allWordpressPost(limit: 3) {
        edges {
          node {
            slug
            excerpt
            link
          }
        }
      }
    }
  `)
    // debugger
    const posts = data.allWordpressPost.edges.map (edge => {
        const { slug, excerpt, link } = edge.node 
        
    });
    debugger
    return (
        <div></div>
    )
}

export default Blog
