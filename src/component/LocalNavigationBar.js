import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

const LocalNavigationBar = () => {
  const localWooYooCategory = '지역우유'
  const localWooYooMenuList = ['공지사항', '자유게시판', '옹알이', '상담소', '이벤트', '리소스']
  const activeWooYooMapNav = ()=>{
    console.log('activeWooYooMapNav')
  }
  return (
    <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand onClick={activeWooYooMapNav}>{localWooYooCategory}</Navbar.Brand>
            <Nav className="me-auto">
                {localWooYooMenuList.map(menu=><Nav.Link>{menu}</Nav.Link>)}
            </Nav>
        </Container>
    </Navbar>
  )
}  
export default LocalNavigationBar
