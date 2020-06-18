import React from "react"

import BasicDiv from '../components/basicDiv.js';

export default function Xyzzy({ pageContext }) {
  return (
    <BasicDiv messageToDisplay={pageContext.frontmatter.message} />
  )
}