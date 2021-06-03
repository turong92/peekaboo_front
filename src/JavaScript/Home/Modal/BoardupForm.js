import React, { Component } from 'react';

class BoardupForm extends Component {
  state = {
    idx: '',
    id: '',
    insertTime:'',
    content:'',
    viewCnt:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      idx: '',
      id: '',
      insertTime:'',
      content:'',
      viewCnt:''
    })
  }
  render() {
    return (
      <div>
        <form className="boardup" onSubmit={this.handleSubmit}> 
          <div className="boardupLeft"></div>
          <div className="boardupCenter">
            <div className="boardWrite" type="text" contentEditable="true" placeholder="게시글 입력" value={this.state.content} onChange={this.handleChange} name="content">
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
      </div>
    );
  }
}
export default BoardupForm;

