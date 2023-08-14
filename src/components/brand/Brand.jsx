import React from 'react'
import './brand.css'
import {google,slack,atlassian,dropbox,shopify} from './imports'
function Brand() {
  return (
    <div className='bard__brand section__padding'>
      <div>
        <img src={google} alt="google" width={55}/>
      </div>
      <div>
        <img src={slack} alt="slack" width={55}/>
      </div>
      <div>
        <img src={atlassian} alt="atlassian" width={55}/>
      </div>
      <div>
        <img src={dropbox} alt="dropbox" width={55}/>
      </div>
      
    </div>
  )
}

export default Brand