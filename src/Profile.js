import React, { Component, PropTypes } from 'react'; 

const propTypes = { };
const defaultProps = { };

class Profile extends  Component { 
    constructor(props) { 
        super(props)
    }
    render() {
        return(
            <div>
                <h1>Profile</h1>
                <dt>Email</dt>
                <dd>{email}</dd>
                <dt>Password</dt>
                <dd>{password}</dd>
                <dt>Name</dt>
                <dd>{name}</dd>
            </div>
        );
    }
}
Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps
export default Profile;