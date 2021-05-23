import React, { Component } from 'react';
import axios from 'axios';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import './App.css';


axios.get('/test')
  .then(function(response){ console.log(response.data); })
  .catch(function(error){ console.log("error"); })

// axios.get('/write')
//   .then(function(response){ console.log(response); })
//   .catch(function(error){ console.log("error"); })

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:"read",
      selected_content_id:2,
      subject:{title:"WEB", sub:"World Wide Web!"},
      welcome:{title:"Welcome", desc:"Hello, React!!"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({mode:"welcome"})
  }//화살표 함수 사용하면 this bind 안해도 됨
  //subject는 화살표 함수 사용한 방식
  //TOC는 bind 사용한 방식

  getReadContent(){
    var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          return data;
        }
        i = i+1;
      }
  }

  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === "read"){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    } else if(this.state.mode === "create"){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        //this.state.contents.push({id:this.max_content_id, title:_title, desc:_desc});
        //push는 원본data 수정, concat은 수정x
        //var _contents = Array.from(this.state.contents);
        // _contents.push({id:this.max_content_id, title:_title, desc:_desc}); 이렇게 하면 배열 복사
        //Object.assign(); << 객체 복사
        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title, desc:_desc});
        this.setState({contents:_contents, mode:'read', selected_content_id:this.max_content_id});
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>;
    } else if(this.state.mode === "update"){
      var _content = this.getReadContent();
      _article = <UpdateContent data={_content} 
        onSubmit={function(_id, _title, _desc){
          var _contents = Array.from(this.state.contents);
          var i = 0;
          while(i<_contents.length){
            if(_contents[i].id === _id){
              _contents[i] = {id:_id, title:_title, desc:_desc};
              break;
            }
            i = i+1;
          }
          this.setState({contents:_contents});
      }.bind(this)}></UpdateContent>;
    }
    return _article;
  }

  render(){
    return (
      <div className="App">
        <Subject title={this.state.subject.title}
        sub={this.state.subject.sub}
        onChangePage={this.handleClick}
        ></Subject>
          {/* <Subject title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:"welcome"});
          }.bind(this)}
          ></Subject> */}
          <TOC 
          onChangePage={function(id){
            this.setState({
              mode:"read",
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
          ></TOC>
          <Control onChangeMode={function(_mode){
            if(_mode === 'delete'){
              if(window.confirm('delete?')){
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while(i < this.state.contents.length){
                  if(_contents[i].id === this.state.selected_content_id){
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({contents:_contents, mode:"welcome"})
              }
            }else{
              this.setState({mode:_mode});
            }
          }.bind(this)}></Control>
          {this.getContent()}
      </div>
    );
  }
}

export default App;

// // const [message, setMessage] = useState("");

// // // 첫번째 렌더링을 다 마친 후 실행합니다.
// // useEffect(
// //   () => {
// //     // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
// //     axios.get('/test')
// //     .then(response => response.data)
// //     .then(message => {
// //       setMessage(message);
// //     });

// //   }, [])
