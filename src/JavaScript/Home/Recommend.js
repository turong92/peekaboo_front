import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Recommend extends Component {
    render(){
        return(
            <nav className="menuNav">
                <div><NavLink to="/home">검색</NavLink></div>
                <div><NavLink to="/">나를 위한 트렌드</NavLink></div>
                <div><NavLink to="/">팔로우 추천</NavLink></div>
                <div><NavLink to="/">팔로우 추천 토픽</NavLink></div>
            </nav>
        );
    }
}

export default Recommend;