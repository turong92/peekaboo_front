import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import "../../CSS/Home/Menu.css";

class Menu extends Component {
    clickHome = () => {
        window.alert("Home");
    }

    render(){
        return(
            <nav className="menuNav">
                <div><NavLink to="/home">홈</NavLink></div>
                <div><NavLink to="/">알림</NavLink></div>
                <div><NavLink to="/">쪽지</NavLink></div>
                <div><NavLink to="/">북마크</NavLink></div>
                <div><NavLink to="/">리스트</NavLink></div>
                <div><NavLink to="/">프로필</NavLink></div>
                <div><NavLink to="/">더보기</NavLink></div>
            </nav>
        );
    }
}

export default Menu;