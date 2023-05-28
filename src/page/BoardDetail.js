import React,  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostCardDetail from '../component/PostCardDetail';

const BoardDetail = () => {
  let {id} = useParams();
  const [postCard, setPostCard] = useState([]);

  const getCardDetail = async() =>{
    console.log('test', `${id}`);
    let url = `http://localhost:5000/postCards/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setPostCard(data);
  };

  useEffect(()=>{
    getCardDetail()
  },[])
  return (
    <div className='boardDetail'>
      <Container>
          <Row>
            <Col lg={12}>
                <PostCardDetail cardDetail={postCard}/>
            </Col>
          </Row>
      </Container>
  </div>
  )
}

export default BoardDetail
