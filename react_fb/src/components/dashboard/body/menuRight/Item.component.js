import React from 'react'
import { Avatar } from '@mui/material'
import"./items.scss"
export default function Item({src,title,Icon}) {
  return (
    <div className='item'>
        {src && <Avatar src={src} className="avatar_Item"/>}
        <h4 className='title_Item'> {title} </h4>
        {Icon && <Icon className="icon_Item" />}
  
    </div>
  )
}
