import React, { Component } from 'react';
import axios from 'axios';

class ReadContents extends Component {
    constructor(props){
        super(props);
        this.state = {
            //contents:[]
            //아래 contents는 dummy입니다.
            contents:[
                {idx:1, id:"dummy1", insertTime:"2021-05-07", content:"새로 스믈 여듫 짜랄 맹가노니 사람마다 해여 수비니겨 날로 쑤메 뻔한킈 하고져 할따라미니라", viewCnt:999},
                {idx:2, id:"dummy2", insertTime:"2021-05-06", content:"이런 전차로 어린 백셩이 니르고져 홇베이셔도 마참네 제 뜨들 시러펴디 몯핧 노미하니아 내 이랄 윙하야 어엿비너겨", viewCnt:999},
                {idx:3, id:"dummy3", insertTime:"2021-05-05", content:"나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄", viewCnt:999},
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
                {list}
            </div>
        );
    }
}

export default ReadContents;