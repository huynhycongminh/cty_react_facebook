import Login from "../components/login/Login.component";
import Header from "../components/dashboard/header/Header.component";
import Sidebar from "../components/dashboard/body/menuLeft/Sidebar.component";
import Feed from "../components/dashboard/body/middle/feed/Feed.component"
import "./App.scss";
import ListItems from "../components/dashboard/body/menuRight/ListItems.component";
import Item from "../components/dashboard/body/menuRight/Item.component";
function App() {
  return (
    <div className="app">
      <Login/>
      {/* <Header/> */}
      <div className="app_body">
        {/* <Sidebar />
        <Feed/>
        <ListItems/> */}
        
      </div>
    </div>
  );
}

export default App;
