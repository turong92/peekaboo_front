import React, { Component } from 'react';

class BoardForm extends Component {
  state = {
    idx: '',
    id: '',
    insertTime:'',
    content:'',
    viewCnt:''
  }

  render() {
    return (
      <div>
        <form className="board" > 
          <div className="boardLeft"></div>
          <div className="boardCenter">
            <div className="boardCenterHead>">
              <div className="boardCenterHeadLeft">
                <h3>계정, 날짜 정보<div className="moreview"><button>더보기</button></div></h3>
                
              </div>
            </div>
            <div className="boardCenterbody>">
              <h3>content</h3>
            </div>
              <div className="boardBottom">
              <h3>이미지 자리</h3>
              </div>
            </div>
        </form>

      </div>
    );
  }
}
export default BoardForm;

