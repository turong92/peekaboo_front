import React, { Component, useState } from 'react';
import "../../CSS/Main/Popup.css";


class HomePopup extends Component {

    render() {
        // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
        const { open, close, header } = this.props;

        return (
            <div className={ open ? 'openPopup popup': 'popup' }>
                { open ? (  
                    <div>
                        <div className="profile">
                            <li><div>계정 이미지 , 이해준</div></li>
                            <div><a href="">기존 계정 추가</a></div>
                            <div><a herf="">로그아웃</a></div>
                        </div>
                    </div>
                ) : null }
            </div>
        )
    }
}


export default HomePopup;
