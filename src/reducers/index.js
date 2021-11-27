import { FETCH_START, FETCH_QUERY } from "../actions";

const initialState = {
    data: [],
    rex: [],
    isFetching: false,
    errors: ""
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case (FETCH_START):
            return ({ ...state, isFetching: true })
        case (FETCH_QUERY):
            return ({ ...state, data: action.payload, isFetching: false })
        default:
            return state;
    }
}