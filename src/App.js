import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
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

  render(){
    var _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === "read"){
      var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i+1;
      }
    }
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
          <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;

// const [message, setMessage] = useState("");

// // 첫번째 렌더링을 다 마친 후 실행합니다.
// useEffect(
//   () => {
//     // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
//     axios.get('/test')
//     .then(response => response.data)
//     .then(message => {
//       setMessage(message);
//     });

//   }, [])
