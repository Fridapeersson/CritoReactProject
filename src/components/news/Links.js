import React from 'react'
import { Link } from 'react-router-dom'

const Links = ({title}) => {
  return (
    <>
        <Link to="#">{title}</Link>
    </>
  )
}

export default Links