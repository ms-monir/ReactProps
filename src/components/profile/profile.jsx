import React from 'react'
import './profileStyle.css';
import Bio from './bio'
import Skills from './skills'
import Links from './links';


function Profile() {
   const me = {
        name: 'Monirul Islam Sarkar',
        title: 'Fullstack Javascript Developer.',
        skillA: 'Java',
        skillB: 'Javascript',
        skillC: 'Python',
    }
  return (
    <div className='container'>   
        <Bio name={me.name} title={me.title}/>
        <Skills skillA={me.skillA} skillB={me.skillB} skillC={me.skillC} />
        <Links />
    </div>
  )
}

export default Profile