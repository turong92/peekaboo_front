import React, { Component } from 'react';
import ReadAuthPopup from "../common/ReadAuthPopup";
import TestModal from "../common/TestModal";
import "../../CSS/common/boardUpForm.css";
import axios from 'axios';
import * as userActions from "../../actions/userAction";

class BoardupForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      idx: '',
      id: '',
      insertTime:'',
      content:'',
      viewCnt:'',
      readAuth: ["0","1","2"],
      testmodalOpen:false,
    }
  }

  // handleSubmit = (e) => {
  //   // 페이지 리로딩 방지
  //   e.preventDefault();
  //   // 상태값을 onCreate 를 통하여 부모에게 전달
  //   this.props.onCreate(this.state);
  //   // 상태 초기화
  //   this.setState({
  //     idx: '',
  //     // idx = idx+1
  //     id: '',
  //     // 
  //     insertTime:'',
  //     content:'',
  //     viewCnt:'',
  //   })
  // }

  sendContentToDB = async (obj) => {
    const _result =
    await axios.post("/write-content" , obj)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      console.error(e);
      //서버 연결 안됐을 때 local test용
      return "local index";
    });
    return _result;
  }

  writeContent = (e) => {
    e.preventDefault();
    const _newContent = document.getElementById("content").textContent;
    if(!_newContent){
      window.alert("새로운 글을 작성해주세요");
    }else {
      var _obj = {
        userId:userActions.getUserId().payload,
        content:document.getElementById("content").textContent,
      };
      
      this.sendContentToDB(_obj).then(result => {
        _obj.idx = result;
        this.props.onCreate(_obj);
      });
      document.getElementById("content").textContent = "";
    }
  }

  // 게시글 만드는 이벤트 
  openReadPopup = () => {
    this.setState({ readAuthOpen:true})
  }
  closeReadPopup = () => {
    this.setState({ readAuthOpen:false})
  }
  handleChangeReadAuth = () => {


  }
  // readauth 변경

  openTestModal = () => {
    this.setState({ testmodalOpen:true})
    console.log();

}
  closeTestModal = () => {
    this.setState({ testmodalOpen:false})
}


  render() {
    const readAuth = 0;
    return (
      <div className="boardupdad">
        <div className="boardup"> 
          <div className="boardupLeft">
          </div>
          <div className="boardupCenter">
            <div id="content" contentEditable="true" spellCheck="true" suppressContentEditableWarning="true" placeholder="무슨 일이 일어나고 있나요?"></div>
            <div className="boardupRead">
              <button className="authbtn" onClick={this.openReadPopup}>
                {
                  {
                    0 : <span>  [읽는 권한 : 모두][readAuth : {readAuth}] </span>,
                    1 : <span>  [읽는 권한 : 팔로우한사람][readAuth] : {readAuth}] </span>,
                    2 : <span>  [읽는 권한 : 멘션 한사람][readAuth : {readAuth}] </span>
                  } [readAuth]
                }
              </button>
              <ReadAuthPopup open = {this.state.readAuthOpen } close = {this.closeReadPopup}></ReadAuthPopup>   
            </div>
            
            <div className="boardupBottom">
              <div className="boardupBottomLeft">
                <div className="boardupbtn-div">
                  <button className="boardupbtn" onClick={this.openTestModal}><svg><path id="path4" d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"/></svg></button>
                    <TestModal open ={this.state.testmodalOpen} close = {this.closeTestModal}></TestModal>
                </div>  
                <div className="boardupbtn-div">
                <button className="boardupbtn"><svg>
                  <path id="path4" d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"/>
                  <path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"/>
                  </svg></button>
                </div>
                <button className="boardupbtn"><svg><path id="path4" d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"/></svg></button>
                <button className="boardupbtn"><svg>
                  <path id="path4" d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>
                  <path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"/>
                  <circle cx="14.738" cy="9.458" r="1.478"></circle>
                  <circle cx="9.262" cy="9.458" r="1.478"></circle>
                  </svg></button>
                <button className="boardupbtn"><svg>
                  <path id="path4" d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z"/>
                  <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z"/>
                  <path d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z"></path>
                  <path d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z"></path>
                  </svg></button>
              </div>
              <div className="boardupBottomRight"><button className="InputBoardBtn" type="button" onClick={this.writeContent}>트윗하기</button>
              </div>
            </div>  
          </div>
        </div>

      </div>
    );
  }
}
export default BoardupForm;

// <ReadAuthPopup open = {this.state.readAuthOpen } close = {this.closeReadPopup}></ReadAuthPopup>


//import React, { useRef, useState, useEffect } from "react";

// export default function BoardupForm(){
//   const initialValue = "value";
//   const [value, setValue] = useState(initialValue);
//   const handleChange = (value) => {
//     setValue(value);
//   };
//   return(
//     <div>
//          <form className="boardup"> 
//            <div className="boardupLeft">
//            </div>
//            <div className="boardupCenter">
//            <div>
//          <div className="boardupLeft"></div>
//          <div className="boardupCenter">
//            <EditableElement onChange={handleChange}>
//              <div style={{outline:"none"}}>
//                <p>{initialValue}</p> 
//              </div>
//            </EditableElement>
//             <label>{value}</label>
//         </div>
//         <div className="boardupBottom"></div>
//     </div>
//              <div className="boardupread">
//                <button className="authbtn">

//                </button>
               
//              </div>
           
//              <div className="boardupBottom">
//                <div className="boardupBottomLeft">
//                  <div><svg><path id="path4" d="m22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.05-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.04 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5v0.03c0 2.08 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.03-0.8-0.08 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.02-1.02-0.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.01-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"/></svg></div>
//                  <div><svg><path id="path4" d="m22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.05-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.04 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5v0.03c0 2.08 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.03-0.8-0.08 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.02-1.02-0.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.01-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"/></svg></div>
//                  <div><svg><path id="path4" d="m22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.05-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.04 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5v0.03c0 2.08 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.03-0.8-0.08 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.02-1.02-0.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.01-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"/></svg></div>
//                  <div><svg><path id="path4" d="m22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.05-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.04 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5v0.03c0 2.08 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.03-0.8-0.08 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.02-1.02-0.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.01-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"/></svg></div>
//                  <div><svg><path id="path4" d="m22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.05-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.04 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5v0.03c0 2.08 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.03-0.8-0.08 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.02-1.02-0.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.01-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"/></svg></div>
//                </div>
//                <div className="boardupBottomRight"><button className="InputBoardBtn" type="submit">트윗하기</button>
//                </div>
//              </div>  
//            </div>
//          </form>
//        </div>
      
//   );
// }

// const EditableElement = (props) => {
//   const { onChange } = props;
//   const element = useRef();
//   let elements = React.Children.toArray(props.children);
//   if (elements.length > 1) {
//     throw Error("Can't have more than one child");
//   }
//   const onMouseUp = () => {
//     const value = element.current?.value || element.current?.innerText;
//     onChange(value);
//   };
//   useEffect(() => {
//     const value = element.current?.value || element.current?.innerText;
//     onChange(value);
//   }, []);
//   elements = React.cloneElement(elements[0], {
//     contentEditable: true,
//     suppressContentEditableWarning: true,
//     ref: element,
//     onKeyUp: onMouseUp
//   });
//   return elements;
// };