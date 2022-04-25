import React from 'react'
import Item from"./Item.component"
import RedeemIcon from '@mui/icons-material/Redeem';
import SearchIcon from '@mui/icons-material/Search';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ChatIcon from '@mui/icons-material/Chat';

import"./listItems.scss"
export default function ListItems() {
  return (
    <div className='listItems'>
        <div className='listItems_top'>
            <div className='title_top'>
            <h3>Lời nhắc</h3>
            </div>
            <div className='birthday'>
                <RedeemIcon className='iconBirthday'    />
                <h4>Linh le and 2 other have birthdays today</h4>
            </div>
        </div>
        <div className='listItems_bottom'>
            <div className='search_bottom'>
                <input placeholder='Người liên hệ'/>
                <SearchIcon className='iconSearch'/>
            </div>
            <Item src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
            title="minh Huynh"
            Icon={FiberManualRecordIcon}/>  
           <Item src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
            title="minh Huynh"
            Icon={FiberManualRecordIcon}/>  
            <Item src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
            title="minh Huynh"
            Icon={FiberManualRecordIcon}/>  
            <Item src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
            title="minh Huynh"
            Icon={FiberManualRecordIcon}/> 
           
        </div>
    </div>
  )
}
