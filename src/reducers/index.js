import { FETCH_START, FETCH_QUERY, FETCH_ERROR, ADD_REXY, FIND_MOVIE, GET_FRIENDS } from "../actions";

const initialState = {
    data: [],
    rexyIDs: [],
    rexys: {
        movies: [],
        tvShows: []
    },
    item: {
        movie: "",
        tvShow: ""
    },
    friends: [],
    isFetching: false,
    errors: ""
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case (FETCH_START):
            return ({ ...state, isFetching: true })
        case (FETCH_QUERY):
            return ({ ...state, data: action.payload, isFetching: false })
        case (FETCH_ERROR): 
            return ({ ...state, errors: action.payload })
        case (ADD_REXY): 
            return ({ ...state, rexyIDs: [...state.rexyIDs, action.payload] })
        case (FIND_MOVIE):
            return ({ ...state, 
                        item: { movie: action.payload },
                        isFetching: false
                        })
        case (GET_FRIENDS):
            return ({ ...state, friends: action.payload })
        default:
            return state;
    }
}