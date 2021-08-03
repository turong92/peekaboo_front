import React, { useState, Component } from 'react';
import "../../CSS/common/ReplyModal.css";

class Modal extends Component {
    
    replyContent = (e) => {
        e.preventDefault();
        const _newContent = document.getElementById("replyContent").textContent;
        if(!_newContent){
            window.alert("새로운 글을 작성해주세요");
        }else {
            this.props.close();
        }
    }
    render() {
        // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
        const { open, close, header } = this.props;
        console.log(this.props);

        return (
            <div className={ open ? 'openModal modal': 'modal' }>
                { open ? (  
                    <section>
                        <header>
                            { header }
                            <button className="close" onClick={ close }> &times; </button>
                        </header>
                        { header=="reply" ? (
                            <section>
                                <main>
                                    <div className="boardLeft"><img src="https://lh3.googleusercontent.com/a/AATXAJwawDtU3RJLAKXUsZQwzjB6VhB_GiSen1NH_Het=s96-c"/></div>
                                    <div>{this.props.children.userName} {this.props.children.userId} {this.props.children.insertTime}</div>
                                    <div>{this.props.children.content}</div>
                                    <div>{this.props.children.userId} 님에게 보내는 답글</div>
                                    
                                    <div className="boardLeft"><img src="https://lh3.googleusercontent.com/a/AATXAJwawDtU3RJLAKXUsZQwzjB6VhB_GiSen1NH_Het=s96-c"/></div>
                                    <div id="replyContent" contentEditable="true" spellCheck="true" suppressContentEditableWarning="true" placeholder="내 답글을 트윗합니다."></div>
                                </main>
                                <footer>
                                    <button className="reTweetButton" onClick={ this.replyContent }> 답글 </button>
                                </footer>
                            </section>
                        ) : null }

                        { header=="reTweet" ? (
                            <section>
                                <main>
                                    <div>{ header }</div>
                                </main>
                                
                            </section>
                        ) : null }

                    </section>
                ) : null }
            </div>
        )
    }
}

export default Modal;