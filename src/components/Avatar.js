import React from 'react';
import {changeAvatarAction, changeNameAction} from "../actions/accountActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const Avatar = (props) => {
    return (
        <img
            className={`user-avatar ${props.size || ''}`}
            src={props.avatar}
            alt={props.name}
            onClick={() => {
                const url = prompt("Enter your avatar url");
                props.changeAvatar(url);
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                const name = prompt("Enter your name");
                props.changeName(name);
            }}
        />
    );
}

const mapStateToProps = state => (
    {
        avatar: state.user.avatar,
        name: state.user.name
    }
)

// const mapDispatchToProps = dispatch => (
//     {
//         changeAvatar: url => dispatch(changeAvatarAction(url)),
//         changeName: name => dispatch(changeNameAction(name))
//     }
// )

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        changeAvatar: changeAvatarAction,
        changeName: changeNameAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);