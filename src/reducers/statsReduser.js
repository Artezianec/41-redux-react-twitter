import {CHANGE_STATS} from "../actions/statsActions";

const initialState = {
    followers: 0,
    following: 0
}

export const statsReducer = (stats = initialState, action) => {
    console.log(stats);
    switch (action.type) {
        case CHANGE_STATS:
            const res = stats[action.payload.statsType] + action.payload.sum;
            return {...stats, [action.payload.statsType]: res < 0 ? 0 : res}
        default:
            return stats;
    }
}