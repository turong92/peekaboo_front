import React, { Component, useState } from 'react';



class Modal extends Component {

    render() {
        // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
        const { open, close, header } = this.props;

        return (
            <div className={ open ? 'openModal modal': 'modal' }>
                { open ? (  
                    <section>
                        <header>
                            { header }
                            <button className="close" onClick={close}> &times; </button>
                        </header>
                        <main>
                            <form className="boardup"> 
                                <div className="boardupLeft"></div>
                                <div className="boardupCenter">
                                <div className="boardWrite" type="text" contentEditable="true" placeholder="게시글 입력">
                                </div>
                                <div className="read"></div>    
                            </div>
                                <div className="boardupBottom">
                                    <div className="boardupBottomLeft">
                                    <div role="button"></div>
                                </div>
                            
                            <div className="boardupBottomRight"><button className="InputBoardBtn" type="submit" ocClick={this.openBoard}>트윗하기</button></div>
                            </div>
                            </form>
                        </main>
                    </section>
                ) : null }
            </div>
        )
    }
}


export default Modal;
