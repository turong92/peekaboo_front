import React, { Component } from 'react';
import axios from 'axios';
import "../../CSS/Main/ReadContents.css";

class ReadContents extends Component {
    constructor(props){
        super(props);
        this.state = {
            //contents:[]
            //아래 contents는 dummy입니다.
            contents:[
                {idx:1, id:"dummy1", insertTime:"2021-05-07", content:"12222222222222222222222222222333333333333333333333333333333333333333333333", viewCnt:999},
                {idx:2, id:"dummy2", insertTime:"2021-05-06", content:"2 어엿비너겨", viewCnt:999},
                {idx:3, id:"dummy3", insertTime:"2021-05-05", content:"3", viewCnt:999},
            ]
        }
    }

    getContentsFromDB = async () => {
        axios.post("/read-home-contents")
        .then(response => {
            this.setState({contents:response.data});
        })
        .catch(e => {
            console.error(e);
        });
    }
    

    //테스트할 땐 아래 함수 주석처리하고 생성자에 contents에 더미 넣어서 테스트하면 됩니다.
    //아래 코드는 server랑 붙을 때 사용합니다.
    // componentDidMount(){
    //     //update 전 컴포넌트에서 필요한 데이터를 요청하기 위한 외부 API 호출 시 주로 쓰입니다.
    //     this.getContentsFromDB();
    // }

    makeContentsList = () => {
        const {contents} = this.state;
        var list = [];
        var i = 0;
        while(i<contents.length){
            console.log(contents[i]);
            list.push(
            <div key={contents[i].idx}>
                <div>{contents[i].id}</div>
                <div>{contents[i].insertTime}</div>
                <div>{contents[i].content}</div>
                <div>{contents[i].viewCnt}</div>
            </div>
            )
            i = i + 1;
        }
        console.log("list", list);

        return list;
    }

    render(){
        var list = this.makeContentsList();
        console.log("render", list);
        return(
            <div>
                <div>
                    <div className="boardup"> 
                        <div className="boardupLeft"></div>
                        <div className="boardupCenter">
                            <div className="boardWrite" type="text" contentEditable="true" placeholder="게시글 입력">
                            </div>
                            <div className="read"></div>    
                        </div>
                        
                        <div className="boardupBottom">
                            <div className="boardupBottomLeft">
                                <div role="button">이미지</div>
                            </div>
                            <div className="boardupBottomRight"><button className="InputBoardBtn">트윗하기</button></div>
                        </div>
                    </div>
                </div>
                    <div className="board">
                        <div className="boardLeft"></div>
                        <div className="boardCenter">
                            {list}
                        </div>
                        <div className="boardBottom"></div>
                    </div>
                    <div className="board">
                        <div className="boardLeft"></div>
                        <div className="boardCenter">
                            {list}
                        </div>
                        <div className="boardBottom"></div>
                    </div>
            </div>
        );
    }
}

export default ReadContents;