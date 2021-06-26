import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import "../../CSS/Main/Recommend.css";

class Recommend extends Component {
    render(){
        return(
            <nav className="menuNav">
                <form className="form search">
                    <div className="searchbar">
                        <div className="searchLeft"></div>
                        <input className="searchCenter" value="" type="text" placeholder="트위터 검색"></input>
                        <div className="searchRight"></div>
                    </div>
                </form>
                <form className="form trend">
                  <div className="trendheader">
                      <h6>나를 위한 트렌드 <button className="trendbtn"><a herf="">설정</a></button></h6>
                  </div>
                  <div className="trendbody">
                    <NavLink to="/">팔로우 추천</NavLink> <button className="trendbtn"><a>더보기</a></button>
                  </div>
                  <div className="trendbody">
                    <NavLink to="/">팔로우 추천</NavLink> <button className="trendbtn"><a>더보기</a></button>
                  </div>
                  <div className="trendbody">
                    <NavLink to="/">팔로우 추천</NavLink> <button className="trendbtn"><a>더보기</a></button>
                  </div>
                  <div className="trendbody">
                    <NavLink to="/">팔로우 추천</NavLink> <button className="trendbtn"><a>더보기</a></button>
                  </div>
                  <div className="trendbody">
                    <NavLink to="/">팔로우 추천</NavLink> <button className="trendbtn"><a>더보기</a></button>
                  </div>                  <div className="trendbody">
                    <NavLink to="/">팔로우 추천</NavLink> <button className="trendbtn"><a>더보기</a></button>
                  </div>
                </form>              
                <form className="form follow ">
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