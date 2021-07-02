import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/accountActions";
import {CHANGE_STATS} from "../actions/statsActions";

const initialState = {
    user: {
        avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
        name: 'Monster'
    },
    stats: {
        followers: 0,
        following: 0
    }
}

export const twitterReducer = (state = initialState, action) => {
    let user;
    let followers;
    switch (action.type) {
        case CHANGE_AVATAR:
            user = {...state.user, avatar: action.payload || state.user.avatar}
            return {...state, user};
        case CHANGE_NAME:
            user = {...state.user, name: action.payload || state.user.name}
            return {...state, user};
        case CHANGE_STATS:
            followers = {...state.stats, followers: action.payload || state.stats.followers}
            return {...state, followers};
        default:
            return state;
    }
}