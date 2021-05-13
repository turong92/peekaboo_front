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
                    <div className="left">
                        <h2>왼쪽</h2>
                    </div>
                    <div className="right">
                        <div className="right1">
                        <h2>오른쪽1</h2>
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