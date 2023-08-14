import React from 'react'
import { Feature } from '../../components'
import './bard.css'
function Bard() {
  return (
    <div className='bard__bard section_margin' id='bard'>
      <div className='bard__bard-feature'>
        <Feature title="What is Bard" text="Google Bard, a powerful AI tool under development, can help you learn, create, and be more productive by answering your questions, generating creative text formats, and helping you plan your day. Try it today!"/>
      </div>
      <div className='bard__bard-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='bard__bard-container'>
        <Feature title="Chatbots" text='AI chatbots are the future of conversation. They are already here, and they are only getting more human-like as technology advances. '/>
        <Feature title="Knowledgebase" text="Google Bard's vast knowledge base allows it to answer your questions in a comprehensive and informative way, even if they are open ended, challenging, or strange."/>
        <Feature title="User-friendly" text="Bard is a user-friendly AI that is as easy to use as chatting with a friend. Just ask a question, and Bard will generate a comprehensive and informative answer in a matter of seconds."/>
      </div>
    </div>
  )
}

export default Bard