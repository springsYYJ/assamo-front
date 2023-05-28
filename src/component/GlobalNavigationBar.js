import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCow } from '@fortawesome/free-solid-svg-icons'
const GlobalNavigationBar = () => {
  return (
    <div>
        <div  className='nav-logo'>
            <h1>Woo! Yoo!</h1>
            <FontAwesomeIcon icon={faCow} bounce size="2xl" />
        </div>       
        <div>
            <hr/>
        </div> 
    </div>
    
  )
}

export default GlobalNavigationBar
