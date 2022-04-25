import React from 'react'
import MessageSender from '../messageSender/MessageSender.component'
import StoryList from '../story/StoryList.component'
import PostNew from"../post/PostNew.component"
import"./Feed.scss"

export default function feed() {
  return (
    <div className='feed'>
    <StoryList/>
    <MessageSender/>
    <PostNew/>
    </div>
  )
}
