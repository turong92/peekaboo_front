import React, { Component, useState } from 'react';



class ReadAuthPopup extends Component {

    render() {
        // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
        const { open, close, header } = this.props;

        return (
            <div className={ open ? 'openReadAuthPopup ReadAuthpopup': 'ReadAuthpopup' }>
                { open ? (  
                    <div>
                        <div className="Authform">
                            <div className="Authtitle">
                                <h4><span>답글을 달 수 있는 사람</span></h4>
                                <h6>이 트윗에 답글을 달 수 있는 사람을 선택하세요. 멘션된 사람은 누구든지 답글을 달 수 있습니다.</h6>
                            </div>
                            <div className="Authbody">
                                <div className="menuitem">모든사람</div>
                                <div className="menuitem">내가 팔로우하는 사람들</div>
                                <div className="menuitem">내가 멘션하는 사람들만</div> 
                            </div>
                        </div>
                    </div>
                ) : null }
            </div>
        )
    }
}




export default ReadAuthPopup;

// { open ? ( ) : null } 문법 = if문