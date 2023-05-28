import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faEye, faComment } from '@fortawesome/free-regular-svg-icons'
import Badge from 'react-bootstrap/Badge';
const PostCard = ({post}) => {
  const navigate = useNavigate()
  const showPostCard=()=>{
    navigate(`/board/${post.id}`)
  }
  return (
    <div className='card' onClick={showPostCard}>
      <div className='category'>
        <Badge bg="dark">
          {post.new == true ? 'NOW' : ""}
        </Badge>
        <Badge bg="danger">
          {post.hot == true ? 'HOT' : ""}
        </Badge>
      </div>
      <h3 className='card-title'>{post.title}</h3>
      <div className='card-contents'>{post.contents}</div>
      <div className='card-writer'>
        <b>{post.region}</b>&nbsp;{post.writer}
      </div>
      <div className='card-info'>
        <div><FontAwesomeIcon icon={faEye} /> {post.viewCount}</div>
        <div><FontAwesomeIcon icon={faThumbsUp} /> 좋아유</div>
        <div><FontAwesomeIcon icon={faComment} /> {post.commentCount}</div>
      </div>
    </div>
  )
}

export default PostCard
