import React, { Component, PropTypes } from 'react'; 
import './Main.css';
const propTypes = { };
const defaultProps = { };


class  Main extends Component { 
    constructor(props) { 
        super(props)
    }
    render() {
        return(
            <div>
                <head></head>
                <body>
                    <haeder>
                    <div className="left">
                        <nav>
                            <a href="">홈1</a>
                            <a href="">홈2</a>
                            <a href="">홈3</a>
                            <a href="">홈4</a>
                            <a href="">홈5</a>
                            <a href="">홈6</a>
                            <a href="">홈7</a>
                        </nav>
                    </div>
                    </haeder>
                    <div className="right">
                        <div className="right1">
                        <h2>오른쪽1222</h2>
                        </div>
                        <div className="right2">
                        <h2>오른쪽2</h2>
                        </div>
                    </div>
                </body>
            </div>
        );
    }
}
Main.propTypes = propTypes;
Main.defaultProps = defaultProps
export default Main;