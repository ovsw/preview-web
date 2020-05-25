import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const Movie = ({path, pageContext}) => {
  console.log(pageContext)
  return ( 
      <div>
        <h2>{pageContext.title}</h2>
        <BlockContent blocks={pageContext.overview}/>
      </div>
   )
}
 
export default Movie;