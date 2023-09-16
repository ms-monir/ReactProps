import React from 'react'

function Skills(props) {
  return (
    <div>
        <div className='Skills'>
            <h3>Skills: </h3>
            <ul>
                <li>{props.skillA}</li>
                <li>{props.skillB}</li>
                <li>{props.skillC}</li>
            </ul>
        </div>
    </div>
  )
}

export default Skills