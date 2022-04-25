import React from 'react'
import { Avatar } from '@mui/material'
import './story.scss'
export default function Story({image,profile,title}) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
        <Avatar src={profile} className='avatar_story'/>
        <h4 className='title_story'>{title}</h4>
    </div> 
  
  )
}
