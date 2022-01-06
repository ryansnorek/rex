import  * as a from "../actions";

const initialState = {
  data: [],
  rexyIDs: [],
  rexys: {
    movies: [],
    tvShows: [],
  },
  item: {
    movie: "",
    tvShow: "",
  },
  auth: {},
  user: {},
  profile: {},
  friends: [],
  discover: {
    movie: [],
    tv: [],
    trending: [],
  },
  isFetching: false,
  errors: "",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case a.FETCH_START:
      return { ...state, isFetching: true };
    case a.FETCH_QUERY:
      return { ...state, data: action.payload, isFetching: false };
    case a.FETCH_ERROR:
      return { ...state, errors: action.payload };
    case a.ADD_REXY:
      return { ...state, rexyIDs: [...state.rexyIDs, action.payload] };
    case a.DELETE_REXY:
      const filteredIDs = state.rexyIDs.filter((id) => id !== action.payload);
      const filteredRexys = state.rexys.movies.filter(
        (rexy) => rexy.id !== action.payload
      );
      return {
        ...state,
        rexyIds: [...filteredIDs],
        rexys: { movies: [...filteredRexys] },
      };
    case a.FIND_REXY_MOVIE:
      return {
        ...state,
        rexys: { movies: [...state.rexys.movies, action.payload] },
      };
    case a.FIND_MOVIE:
      return { ...state, item: { movie: action.payload } };
    case a.FIND_TV:
      return { ...state, item: { tvShow: action.payload } };
    case a.GET_FRIENDS:
      return { ...state, friends: action.payload };
    case a.DISCOVER_MOVIE:
      return { ...state, discover: { movie: [...action.payload] } };
    case a.DISCOVER_TV:
      return { ...state, discover: { tv: [...action.payload] } };
    case a.TRENDING:
      return { ...state, discover: { trending: [...action.payload] } };
    case a.AUTHORIZE_USER:
        return { ...state, auth: { ...action.payload }, isFetching: false };
    case a.SET_USER:
      return { ...state, user: { ...action.payload }, isFetching: false };
    case a.SET_PROFILE:
      return { ...state, profile: { ...action.payload }, isFetching: false };
    default:
      return state;
  }
}
