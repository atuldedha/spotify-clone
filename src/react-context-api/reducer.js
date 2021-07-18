export const initialState = {
    user : null, 
    playlists: [],
    playing: false,
    item: null,
};
 
//state represents the current state which we override and action is what we do with our current state;
//action-> type, [payload] here payload is the user and state is set user;

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER': 
            return {
                ...state, 
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default: 
            return state;
    }
}

export default reducer;