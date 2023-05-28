import React, { useEffect, useState } from 'react'
import PostCard from '../component/PostCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocalNavigationBar from '../component/LocalNavigationBar';
import LocalWooYooMapNav from '../component/LocalWooYooMapNav';

const Board = () => {
  const [postCardList, setPostCardList] = useState([]);
  const [mapNavActive, setMapNavActive] = useState([false]);

  useEffect(()=>{
    getPostCards();
  }, []) 

  const getPostCards = async () => {
    let url = 'http://localhost:5000/postCards';
    let response = await fetch(url);
    let data = await response.json();
    setPostCardList(data);
  }  

  const activeMapNav = () =>{
    if(mapNavActive){
      setMapNavActive(false)
    }else{
      setMapNavActive(true)      
    }
  }
  return (
    <div className='board'>
        <Container>
            <Row>
              <Col lg={12} onClick={activeMapNav}>
                <LocalNavigationBar/>
              </Col>
            </Row>
        </Container>
        {mapNavActive === true ?(
            <Container>
              <Row>
                <Col lg={6}>
                  <LocalWooYooMapNav/>
                </Col>
                <Col lg={6}> 
                <div className='post-card'>
                  {postCardList.map((postCard)=>(
                    <PostCard post={postCard}/>
                  ))}
                </div>
                  </Col>
              </Row>
            </Container>
          ) : (
          <Container>
              <Row>
                  {postCardList.map((postCard)=>(
                    <Col lg={6}> 
                      <PostCard post={postCard}/>
                    </Col>
                  ))}
              </Row>
          </Container>
          )}
       
    </div>
  )
}

export default Board