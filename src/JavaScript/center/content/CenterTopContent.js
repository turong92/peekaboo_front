import React, { Component } from 'react';
import axios from 'axios';
import "../../../CSS/center/common/ReadContents.css";
import BoardForm from '../../common/BoardForm';
import * as userActions from "../../../actions/userAction";

class CenterTopContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            idx :'',
            id: '',
            contents:[
                {idx:1, userName:"dummy1", insertTime:"2021-05-05", content:"상단 테스트", viewCnt:999},
            ]
        }
    }

    render() {

        return(
            <div className="CenterTopContent">
                <div>
                    <BoardForm key={this.state.contents[0].idx} contents={this.state.contents[0]} />
                </div>

            </div>
        )
    }
}

export default CenterTopContent;