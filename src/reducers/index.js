import { FETCH_START, FETCH_QUERY, FETCH_ERROR, ADD_REXY, FIND_MOVIE } from "../actions";

const initialState = {
    data: [],
    rexyIDs: [],
    rexys: {
        movies: [],
        tvShows: []
    },
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
                        rexys: {
                            movies: [...state.rexys.movies, action.payload],
                            tvShows: [...state.rexys.tvShows]
                        }})
        default:
            return state;
    }
}