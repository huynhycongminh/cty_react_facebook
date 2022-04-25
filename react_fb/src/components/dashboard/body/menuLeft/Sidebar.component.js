import React from "react";
import SidebarRow from "./SidebarRow.component";
import ArticleIcon from "@mui/icons-material/Article";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FlagIcon from "@mui/icons-material/Flag";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import "./Sidebar.scss";
import Item from "../menuRight/Item.component";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <SidebarRow
          src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
          title="minh"
        />
        <SidebarRow Icon={ArticleIcon} title="Bảng tin" />
        <SidebarRow Icon={OndemandVideoIcon} title="Videos" className="" />
      </div>
      <div className="sidebar_middle">
        <h3 className="title_middle">Lối tắt</h3>
        <SidebarRow 
          image="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
          title="Hội những người yêu thích chó mèo"
        />
        <SidebarRow
          image="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
          title="Hội những người yêu thích chó mèo"
        />
        <SidebarRow
          image="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
          title="Hội những người yêu thích chó mèo"
        />
        <SidebarRow
          image="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
          title="Hội những người yêu thích chó mèo"
        />
        <div className="see_more">
          <h3 className="more">Xem thêm </h3>
          <ArrowDropDownIcon className="arrow_icon_more" />
        </div>
      </div>
      <div className="sidebar_bottom">
        <h3 className="title_bottom">Khám Phá</h3>
        <SidebarRow Icon={FlagIcon} title="Trang" />
        <SidebarRow Icon={PeopleAltIcon} title="Nhóm" />
        <Item />
      </div>
    </div>
  );
}
