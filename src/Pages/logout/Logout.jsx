import React from 'react'
import Header from '../../Layout/partials/Header'

import { useNavigate } from 'react-router-dom'

function Logout() {
	const navigate=useNavigate();
  return (
	<>
	 <div className="default-layout">
		<header className="header mb-2">
        <Header/>
      </header>

	<h1 className='log'> Logging you out...</h1>
	<button className='button' onClick={()=>navigate('/')}>Back to Login....</button>
	
	</div>
	</>
	
  )
}

export default Logout