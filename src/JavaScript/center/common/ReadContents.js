import React, { Component } from 'react';
import axios from 'axios';
import "../../../CSS/center/common/ReadContents.css";
import BoardForm from '../../common/BoardForm';
import * as userActions from "../../../actions/userAction";


import Modal2 from '../../common/Modal'
// 테스트용 

class ReadContents extends Component {
    constructor(props){
        super(props);
        this.state = {
            //contents:[]
            //아래 contents는 dummy입니다.
            
            idx :'',
            id: '',
            contents:[
                {idx:3, userName:"dummy3", userId:"google_115854284849039362768", insertTime:"2021-05-07", content:"2 어엿비너겨", viewCnt:999, likeCnt:35, isLiked:true},
                {idx:2, userName:"dummy2", userId:"google_115854284849039362768", insertTime:"2021-05-06", content:"3332222222222222222222222222222333333333333333333333333333333333333333333333", viewCnt:999, likeCnt:35, isLiked:true},
                {idx:1, userName:"dummy1", userId:"google_115854284849039362768", insertTime:"2021-05-05", content:"1234", viewCnt:999, likeCnt:35, isLiked:true},
            ]
        }
    }


    
    openModal = () => {
        this.setState({ modalOpen:true})
    }
    closeModal = () => {
        this.setState({ modalOpen:false})
    }

    // 테스트용

    getContentsFromDB = async () => {
        console.log("====================");
        console.log(this.props);
        // var _condition = {
        //     userId:this.props.condition.selectedMenu,
        //     contentId:this.props.condition.contentId,
        // };
        var _condition = this.props.condition;
        axios.post("/read-contents", _condition)

        .then(response => {
            console.log(response);
            this.setState({contents:response.data});
        })
        .catch(e => {
            console.error(e);
        });
    }

    // handleWrite = (data) => {
    //     const { contents } = this.state;
    //     var len = contents.length;
    //     var _contents = Array.from(contents);
    //     _contents.push({
    //         idx:len + 1,
    //         userName:window.localStorage.getItem("userName"),
    //         insertTime:"now",
    //         content:data,
    //         viewCnt:0
    //     });
    //     this.setState({contents:_contents});
    //   }

    static getDerivedStateFromProps(props, state) {
        // Any time the current user changes,
        // https://ko.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
        // Reset any parts of state.
        
        if(props.data.content){
            const { contents } = state;
            var _contents = Array.from(contents);
            _contents.unshift({
                idx:props.data.idx,
                content:props.data.content,
                userName:userActions.getUserName().payload,
                userId:userActions.getUserId().payload,
                insertTime:"now",
                viewCnt:0,
                isLiked:false,
            });

            return {
                contents:_contents
            };
        }
        return null;
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.data !== prevProps.data) {
    //         this.handleWrite(this.props.data);
    //     }
    // }

    //테스트할 땐 아래 함수 주석처리하고 생성자에 contents에 더미 넣어서 테스트하면 됩니다.
    //아래 코드는 server랑 붙을 때 사용합니다.
    componentDidMount(){
        //update 전 컴포넌트에서 필요한 데이터를 요청하기 위한 외부 API 호출 시 주로 쓰입니다.
        // this.getContentsFromDB();
        this.getContentsFromDB();
    }

    makeContentsList = () => {
        const {contents} = this.state;
        var list = [];
        var i = 0;
        while(i < contents.length){
            list.push(<BoardForm key={contents[i].idx} contents={contents[i]}></BoardForm>);
            i = i + 1;
        }

        // while(i<contents.length){
        //     console.log(contents[i]);
        //     list.push(
        //     <div key={contents[i].idx}>
        //         <div>{contents[i].id}</div>
        //         <div>{contents[i].insertTime}</div>
        //         <div>{contents[i].content}</div>
        //         <div>{contents[i].viewCnt}</div>
        //     </div>
        //     )
        //     i = i + 1;
        // }
        // console.log("list", list);

        return list;
    }


    render(){
        
        var list = this.makeContentsList();
        //console.log(this.state.contents);

        return(
            <div className="ReadContents">
                
                <div className="">
                    {list}
                </div>
                
            </div>
            
        );
    }
}

export default ReadContents;







//                    <div className="board">
//                        <div className="boardLeft"></div>
//                        <div className="boardCenter">
//                            {list}
//                       </div>
//                        <div className="boardBottom"></div>
//                    </div>
//                    <div className="board">
//                        <div className="boardLeft"></div>
//                        <div className="boardCenter">
//                            {list}
//                        </div>
//                        <div className="boardBottom"></div>
//                    </div>
                    //