import React from 'react'

const PostCardDetail = ({cardDetail}) => {
  console.log({cardDetail})
  return (
    <div>
      <h2 className='card-detail-title'>{cardDetail.title}</h2>
    </div>
  )
}

export default PostCardDetail
