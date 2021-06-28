import React, { Component, useState } from 'react';



class ReadAuthPopup extends Component {
    state = {  readAuth :'0'};
    readAuthonClick1 = () => {
        this.setState({readAuth: '0' });
    };
    readAuthonClick2 = () => {
        this.setState({readAuth: '1' });
    };
    readAuthonClick3 = () => {
        this.setState({readAuth: '2' });
    };

    // 클릭시 readAuth 변화 이벤트 
    // 없앨 수도 있음, 백쪽과 협의
    // 부모<>자식 연동 아직 x
    render() {
        // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
        const { open, close, header, } = this.props;
        return (
            <div className={ open ? 'openReadPopup readpopup': 'readpopup' }>
                { open ? (  
                    <section>
                        <header>
                            { header }
                            <button className="close" onClick={close}> &times; </button>
                        </header>
                        <main>
                            <form className="readauth" > 
                                <div className="readheader">
                                    <div className="readheadertitle"><span>답글을 달 수 있는 사람</span></div>
                                    <div className="readheadercontent"><span>이 트윗에 답글을 달 수 있는 사람을 선택하세요. 멘션된 사람은 누구든지 답글을 달 수 있습니다.</span></div>
                                </div>
                                <div className="readmain">
                                    <button className="readsection readauth0" onClick={this.readAuthonClick1}>{this.state.readAuth} </button>
                                    <button className="readsection readauth1" onClick={this.readAuthonClick2}>{this.state.readAuth} </button>
                                    <button className="readsection readauth2" onClick={this.readAuthonClick3}>{this.state.readAuth} </button>
                                </div>
                             
                            </form>
                        </main>
                    </section>
                ) : null }
            </div>
        )
    }
}




export default ReadAuthPopup;

// { open ? ( ) : null } 문법 = if문

// <button className="close" onClick={close}> &times; </button>

//            <div className={ open ? 'openReadPopup ReadAuthpopup': 'ReadAuthpopup' }>
// { open ? (
//     <section>
//         <header>
//                     { header }
//         </header>   
//             <main>
//                 <div>
//                     <div className="Authform">
//                         <div className="Authtitle">
//                             <h4><span>답글을 달 수 있는 사람</span></h4>
//                             <h6>이 트윗에 답글을 달 수 있는 사람을 선택하세요. 멘션된 사람은 누구든지 답글을 달 수 있습니다.</h6>
//                         </div>
//                         <div className="Authbody">
//                             <div className="menuitem">모든사람</div>
//                             <div className="menuitem">내가 팔로우하는 사람들</div>
//                             <div className="menuitem">내가 멘션하는 사람들만</div> 
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </section>    
//     ) : null }
// </div>