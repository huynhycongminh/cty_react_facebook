import React from 'react'
import { Avatar } from '@mui/material';
import "./post.scss";

export default function PostNew(profilePic, username, timestamp, message, image) {
  return (
        <div className="post">
    <div className="post__top">
      <Avatar src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg" className="post__avatar" />
      <div className="post__topInfo">
        <h3>Minh</h3>
        {/* <p>timestamp</p> */}
        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
      </div>
    </div>
    <div className="post__bottom">
      <p>hội những người yêu mèo</p>
    </div>
    <div className="post__image">
      <img src="https://1.bp.blogspot.com/-ciJx92ftXls/YGLZXgbmRgI/AAAAAAAArCg/iA9A_uU0qewj8ZgCpv6mCRqNuvo2YlZZACNcBGAsYHQ/s0/1d83a6d88d8be5b041a9a98fd5048311.jpeg" alt="post" />
    </div>
    
 </div>

  )
}
