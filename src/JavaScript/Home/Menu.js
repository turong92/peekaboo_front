import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import "../../CSS/Home/Menu.css";

class Menu extends Component {
    clickHome = () => {
        window.alert("Home");
    }

    render(){
        return(
            <div>
            <div className="aaa">
                <div>
                    <div>IMG <NavLink to="/home">홈</NavLink></div>
                </div>
                <nav className="menuNav">
                    <div className="Navlink">IMG <NavLink to="/home">홈</NavLink></div>
                    <div className="Navlink">IMG <NavLink to="/">알림</NavLink></div>
                    <div className="Navlink">IMG <NavLink to="/">쪽지</NavLink></div>
                    <div className="Navlink">IMG <NavLink to="/">북마크</NavLink></div>
                    <div className="Navlink">IMG <NavLink to="/">리스트</NavLink></div>
                    <div className="Navlink">IMG <NavLink to="/">프로필</NavLink></div>
                    <div className="Navlink">IMG <NavLink to="/">더보기</NavLink></div>
                </nav>
                <div className="BtnDiv">
                    <button className="BtnLeft"><span>트윗하기</span></button>
                </div>
                <div className="blank">
                    
                </div>
                <div className="UserMenu">
                    유저 정보
                </div>
            </div>
            </div>
        );
    }
}

export default Menu;