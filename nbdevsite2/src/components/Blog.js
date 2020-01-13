import React from "react"
import { graphql } from "gatsby"



export default ({ data }) => {
    debugger
    return (
        <div></div>
    )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`