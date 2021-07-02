export const CHANGE_STATS = 'CHANGE_STATS';

export const changeFollowersAction = (statsType,sum) => (
    {
    type: CHANGE_STATS,
        payload: {statsType, sum}
    }
)

