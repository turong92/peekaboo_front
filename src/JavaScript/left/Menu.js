import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../CSS/left/Menu.css";
import Modal from "../../JavaScript/common/Modal";
import Popup from "../common/Popup";

import * as userActions from '../../actions/userAction';

class Menu extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            modalOpen:false,
            modallOpen:false,
            //test
            popupOpen:false,
            userId:"/" + userActions.getUserId().payload,
        };
    }
    // React에서 Component를 생성할 때 state 값을 초기화하거나 메서드를 바인딩할 때 construcotr()를 사용
    // React.Component를 상속한 컴포넌트의 생성자를 구현할 때는 super(props)를 선언을 권고하고 있습니다.
    // 이유는 this.props 사용 시 생성자 내에서 정의되지 않아 버그 발생 가능성이 생기기 때문입니다.
    openModal = () => {
        this.setState({ modalOpen:true})
    }
    closeModal = () => {
        this.setState({ modalOpen:false})
    }

    opneModall = () => {
        this.setState({ modallOpen:true})
    }
    //test
    closeModall = () => {
        this.setState({ modallOpen:false})
    }
    //test


    openPopup = () => {
        this.setState({ popupOpen:true})
    }
    closePopup = () => {
        this.setState({ popupOpen:false})
    }


    clickHome = () => {
        window.alert("Home");
    }


    handleSelectMenu = (e) => {
        this.props.handleSelectMenu(e.target.value);
    }




    render(){
        console.log(this.state.userId);
        return(
        <div>
            <div className="menutotal">
                <div className="menudiv"> 
                    <div className="Navlink">
                        <NavLink to="/home"><svg><path id="path4" d="m22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.05-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.04 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5v0.03c0 2.08 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.03-0.8-0.08 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.02-1.02-0.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.01-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"/></svg></NavLink></div>                    
                </div>
                <nav className="menuNav">
                    <div className="Navlink">
                        <NavLink 
                        to="/home"
                        isActive={(match, location) => {
                            if(match){
                                
                            }
                        }}
                        ><svg><path id="path4" d="m22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.05-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.04 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5v0.03c0 2.08 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.03-0.8-0.08 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.02-1.02-0.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.01-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"/></svg>홈</NavLink></div>
                    <div className="Navlink2">
                        <NavLink to="/notifications">
                            <svg><path id="path4" d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"/></svg>
                            알림</NavLink></div>
                    <div className="Navlink2">
                        <NavLink to="/messages">
                            <svg><path id="path4" d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"/></svg>
                            쪽지</NavLink></div>
                    <div className="Navlink2">
                        <NavLink to="/i/bookmarks">
                            <svg><path id="path4" d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"/></svg>
                            북마크</NavLink></div>
                    <div className="Navlink2">
                        <NavLink to="/userId/lists">
                            <svg>
                                <path id="path4" d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"/>
                                <path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"/>
                            </svg>리스트</NavLink></div>
                    <div className="Navlink">
                        <NavLink to={this.state.userId}>
                            <svg><path id="path4" d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"/></svg>
                            프로필</NavLink></div>
                    <div className="Navlink2">
                        <NavLink to="/">
                            <svg>
                                <circle cx="17" cy="12" r="1.5"></circle>
                                <circle cx="12" cy="12" r="1.5"></circle>
                                <circle cx="7" cy="12" r="1.5"></circle>
                                <path id="path4" d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>
                            </svg>더보기</NavLink></div>
                </nav>
                <div className="BtnDiv">
                    <button className="BtnLeft" onClick={this.openModal}><span>트윗하기</span></button>
                    <Modal open = {this.state.modalOpen} close = { this.closeModal }>
                    </Modal>
                </div>
            
                <div className="blank">
                </div>
                <div className="UserMenu">
                    <button className="BtnLeft" onClick={this.openPopup}><span>내정보</span></button>
                    <Popup open = {this.state.popupOpen } close = {this.closePopup }>
                    </Popup>
                </div>
            </div>
        </div>
        );
    }
}


export default Menu;


//<div className="home"><button className="selectHomeButton" type="button" value="HOME" onClick={this.handleSelectMenu}>홈</button></div>
//<div className="profile"><button className="selectProfileButton" type="button" value="PROFILE" onClick={this.handleSelectMenu}>프로필</button></div>
