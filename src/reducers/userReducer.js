import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/accountActions";

const initialState = {
    avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
    name: 'Monster'
}

export const userReducer = (user = initialState, action) => {
    switch (action.type) {
        case
        CHANGE_AVATAR:
            return {...user, avatar: action.payload || user.avatar};
        case
        CHANGE_NAME:
            return {...user, name: action.payload || user.name};
        default:
            return user;
    }
}