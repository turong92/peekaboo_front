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
                            <form className="boardup2"> 
                                <div className="boardupLeft"></div>
                                <div className="boardupCenter">
                                    <div className="boardupWrite" type="text" contentEditable="true" placeholder="게시글 입력">
                                    </div>
                                    <div className="boardupread">
                                        <span>누구에게 보여줄지 권한</span> 
                                    </div>
                                    <div className="boardupBottom">
                                        <div className="boardupBottomLeft">
                                            <div><svg><path id="path4" d="m22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.05-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.04 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5v0.03c0 2.08 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.03-0.8-0.08 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.02-1.02-0.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.01-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"/></svg></div>
                                            <div><svg><path id="path4" d="m22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.05-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.04 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5v0.03c0 2.08 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.03-0.8-0.08 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.02-1.02-0.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.01-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"/></svg></div>
                                            <div><svg><path id="path4" d="m22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.05-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.04 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5v0.03c0 2.08 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.03-0.8-0.08 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.02-1.02-0.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.01-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"/></svg></div>
                                            <div><svg><path id="path4" d="m22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.05-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.04 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5v0.03c0 2.08 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.03-0.8-0.08 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.02-1.02-0.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.01-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"/></svg></div>
                                            <div><svg><path id="path4" d="m22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.05-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.04 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5v0.03c0 2.08 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.03-0.8-0.08 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.02-1.02-0.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.01-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"/></svg></div>                        
                                        </div>
                                        <div className="boardupBottomRight"><button className="InputBoardBtn" type="submit" ocClick={this.openBoard}>트윗하기</button>
                                        </div>
                                    </div>    
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
