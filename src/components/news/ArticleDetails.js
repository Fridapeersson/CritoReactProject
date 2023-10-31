import React from 'react'
import { useParams } from 'react-router-dom';

const ArticleDetails = () => {

  const {id} = useParams();

  return (
    <>
      {id}
    </>
  )
}

export default ArticleDetails