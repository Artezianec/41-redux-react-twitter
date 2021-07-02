import React from 'react';
import Avatar from "./Avatar";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeFollowersAction} from "../actions/statsActions";

const UserStats = ({name, followers, following, changeFollowers}) => {
    return (
        <div className='user-stats'>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => changeFollowers('followers', 1)}
                    onContextMenu={event => {
                        event.preventDefault();
                        changeFollowers('followers', -1);
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => changeFollowers('following', 1)}
                    onContextMenu={event => {
                        event.preventDefault();
                        changeFollowers('following', -1);
                    }}
                >Following: {following}</div>
            </div>
        </div>
    )
}



const mapStateToProps = state => (
    {
        name: state.user.name,
        followers: state.stats.followers,
        following: state.stats.following
    }
)

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        changeFollowers: changeFollowersAction,
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserStats);