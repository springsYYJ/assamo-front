import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <div className='main'>
            <h3>메인 페이지</h3>
        </div>
        <div>
            <Link to='board'>go to board</Link>
        </div>
    </div>
  )
}

export default Main
