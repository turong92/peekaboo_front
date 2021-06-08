import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import "../../CSS/Main/Recommend.css";

class Recommend extends Component {
    render(){
        return(
            <nav className="menuNav">
                <form className="form2">
                    <div><input value="" type="text" placeholder="트위터 검색"></input></div>
                </form>
                <form className="form3">
                  <div><NavLink to="/">나를 위한 트렌드</NavLink></div>
                </form>              
                <form className="form4">
                <div><NavLink to="/">팔로우 추천</NavLink></div> 
                </form>
            </nav>
        );
    }
}

export default Recommend;


//<form className="form5">
//<div><NavLink to="/">팔로우 추천 토픽</NavLink></div>
//</form>