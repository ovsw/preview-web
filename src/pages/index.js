import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  console.log(data.allSanityMovie.edges)
  
  return(
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link><br/><br/>
    <h2>Movies</h2>
    <ul>
      {data.allSanityMovie.edges.map( ({node}) => (<li><Link to={node.slug.current}>{node.title}</Link></li>))}
    </ul>
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query MoviesListQuery {
    allSanityMovie {
      edges {
        node {
          _rawOverview
          _id
          slug {
            current
          }
          title
        }
      }
    }
  }
`
