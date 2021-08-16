import React, { Component, useState } from 'react';



class Popup extends Component {

    render() {
        // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
        const { open, close, header } = this.props;

        return (
            <div className={ open ? 'openPopup popup': 'popup' }>
                { open ? (  
                    <section>
                        <header>
                            { header }
                            <button className="close" onClick={close}> &times; </button>
                        </header>
                        <main>
                            <form className="readauth" > 
                                <div className="readheader">
                                    <li>
                                        <div className="readheader-form">
                                            <div className="readheader-form-left">
                                                <div>이미지</div>
                                            </div>
                                            <div className="readheader-form-right">
                                                <div>
                                                    <div>이름</div>
                                                    <div>userid</div>
                                                </div>
                                                <div>
                                                    <svg>
                                                        <g>
                                                            <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                <div className="readmain">
                                    <navLink to="/logout">
                                    <span>userid</span> 님 계정에서 로그아웃
                                    </navLink>
                                </div>
                            </form>
                        </main>
                    </section>
                ) : null }
            </div>
        )
    }
}


export default Popup;
