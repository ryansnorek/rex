import * as a from "../actions";

const initialState = {
  queryResults: [],
  userContent: {
    movies: [],
    tvShows: [],
  },
  item: {
    movie: "",
    tvShow: "",
  },
  auth: {},
  user: {},
  relationships: {
    followers: [],
    following: [],
    blocked: [],
  },
  userContentList: {
    watchlistMovies: [],
    watchlistShows: [],
    rexyMovies: [],
    rexyShows: [],
  },
  friend: {},
  friendContentList: {
    movies: [],
    tvShows: [],
  },
  discover: {
    movies: [],
    tvShows: [],
    trending: [],
  },
  isFetching: false,
  firstTimeUser: false,
  loginComplete: false,
  errors: "",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case a.FETCH_START:
      return { ...state, isFetching: true };
    case a.SET_QUERY_RESULTS:
      return {
        ...state,
        queryResults: action.payload,
        errors: "",
      };
    case a.FETCH_ERROR:
      return { ...state, errors: action.payload };
    case a.FETCHING_COMPLETE:
      return { ...state, isFetching: false };
    case a.SET_USER_MOVIES:
      return {
        ...state,
        userContent: {
          movies: [...action.payload],
          tvShows: [...state.userContent.tvShows],
        },
        errors: "",
      };
    case a.SET_USER_TV_SHOWS:
      return {
        ...state,
        userContent: {
          movies: [...state.userContent.movies],
          tvShows: [...action.payload],
        },
        errors: "",
      };
    case a.SET_FOLLOWER:
      return {
        ...state,
        relationships: {
          followers: [...state.relationships.followers, action.payload],
          following: [...state.relationships.following],
          blocked: [...state.relationships.blocked],
        },
        errors: "",
      };
    case a.SET_FOLLOWING:
      return {
        ...state,
        relationships: {
          followers: [...state.relationships.followers],
          following: [...state.relationships.following, action.payload],
          blocked: [...state.relationships.blocked],
        },
        errors: "",
      };
    case a.SET_BLOCKED_USERS:
      return {
        ...state,
        relationships: {
          followers: [...state.relationships.followers],
          following: [...state.relationships.following],
          blocked: [...state.relationships.blocked, action.payload],
        },
        errors: "",
      };
    case a.CLEAR_RELATIONSHIPS:
      return {
        ...state,
        relationships: {
          followers: [],
          following: [],
          blocked: [],
        },
      };
    case a.SET_ITEM_MOVIE:
      return {
        ...state,
        item: { movie: action.payload },
        errors: "",
      };
    case a.SET_ITEM_TV_SHOW:
      return {
        ...state,
        item: { tvShow: action.payload },
        errors: "",
      };
    case a.UNSET_ITEM:
      return { ...state, item: {} };
    case a.ADD_WATCHLIST_MOVIE_CONTENT:
      return {
        ...state,
        userContentList: {
          watchlistMovies: [
            ...state.userContentList.watchlistMovies,
            action.payload,
          ],
          watchlistShows: [...state.userContentList.watchlistShows],
          rexyMovies: [...state.userContentList.rexyMovies],
          rexyShows: [...state.userContentList.rexyShows],
        },
        errors: "",
      };
    case a.CLEAR_WATCHLIST_MOVIE_LIST:
      return {
        ...state,
        userContentList: {
          watchlistMovies: [],
          watchlistShows: [...state.userContentList.watchlistShows],
          rexyMovies: [...state.userContentList.rexyMovies],
          rexyShows: [...state.userContentList.rexyShows],
        },
        errors: "",
      };
    case a.REMOVE_WATCHLIST_MOVIE_CONTENT:
      const { watchlistMovies } = state.userContentList;
      const updatedMovieContent = watchlistMovies.filter((movie) => {
        return movie.id !== action.payload;
      });
      return {
        ...state,
        userContentList: {
          watchlistMovies: [...updatedMovieContent],
          watchlistShows: [...state.userContentList.watchlistShows],
          rexyMovies: [...state.userContentList.rexyMovies],
          rexyShows: [...state.userContentList.rexyShows],
        },
      };
    case a.ADD_WATCHLIST_SHOW_CONTENT:
      return {
        ...state,
        userContentList: {
          watchlistShows: [
            ...state.userContentList.watchlistShows,
            action.payload,
          ],
          watchlistMovies: [...state.userContentList.watchlistMovies],
          rexyMovies: [...state.userContentList.rexyMovies],
          rexyShows: [...state.userContentList.rexyShows],
        },
        errors: "",
      };
    case a.CLEAR_WATCHLIST_SHOW_LIST:
      return {
        ...state,
        userContentList: {
          watchlistShows: [],
          watchlistMovies: [...state.userContentList.watchlistMovies],
          rexyMovies: [...state.userContentList.rexyMovies],
          rexyShows: [...state.userContentList.rexyShows],
        },
        errors: "",
      };
    case a.REMOVE_WATCHLIST_SHOW_CONTENT:
      const { watchlistShows } = state.userContentList;
      const updatedShowContent = watchlistShows.filter((show) => {
        return show.id !== action.payload;
      });
      return {
        ...state,
        userContentList: {
          watchlistShows: [...updatedShowContent],
          watchlistMovies: [...state.userContentList.watchlistMovies],
          rexyMovies: [...state.userContentList.rexyMovies],
          rexyShows: [...state.userContentList.rexyShows],
        },
      };
    case a.ADD_REXY_MOVIE_CONTENT:
      return {
        ...state,
        userContentList: {
          rexyMovies: [
            ...state.userContentList.rexyMovies,
            action.payload
          ],
          rexyShows: [...state.userContentList.rexyShows],
          watchlistMovies: [...state.userContentList.watchlistMovies],
          watchlistShows: [...state.userContentList.watchlistShows],
        },
        errors: "",
      };
    case a.ADD_REXY_SHOW_CONTENT:
      return {
        ...state,
        userContentList: {
          rexyShows: [
            ...state.userContentList.rexyShows,
            action.payload
          ],
          rexyMovies: [...state.userContentList.rexyMovies],
          watchlistMovies: [...state.userContentList.watchlistMovies],
          watchlistShows: [...state.userContentList.watchlistShows],
        },
        errors: "",
      };
    case a.SET_FRIEND:
      return {
        ...state,
        friend: { ...action.payload },
        errors: "",
      };
    case a.ADD_FRIEND_MOVIE_CONTENT:
      return {
        ...state,
        friendContentList: {
          movies: [...state.friendContentList.movies, action.payload],
          tvShows: [...state.friendContentList.tvShows],
        },
        errors: "",
      };
    case a.CLEAR_FRIEND_MOVIE_LIST:
      return {
        ...state,
        friendContentList: {
          movies: [],
          tvShows: [...state.friendContentList.tvShows],
        },
        errors: "",
      };
    case a.ADD_FRIEND_TV_CONTENT:
      return {
        ...state,
        friendContentList: {
          movies: [...state.friendContentList.movies],
          tvShows: [...state.friendContentList.tvShows, action.payload],
        },
        errors: "",
      };
    case a.CLEAR_FRIEND_TV_LIST:
      return {
        ...state,
        friendContentList: {
          movies: [...state.friendContentList.movies],
          tvShows: [],
        },
        errors: "",
      };
    case a.SET_DISCOVER_TRENDING:
      return {
        ...state,
        discover: {
          ...state.discover,
          trending: [...action.payload],
        },
      };
    case a.SET_DISCOVER_MOVIES:
      return {
        ...state,
        discover: {
          ...state.discover,
          movies: [...action.payload],
        },
      };
    case a.SET_DISCOVER_TV_SHOWS:
      return {
        ...state,
        discover: {
          ...state.discover,
          tvShows: [...action.payload],
        },
      };
    case a.AUTHORIZE_USER:
      return {
        ...state,
        auth: { ...action.payload },
        errors: "",
      };
    case a.LOGOUT_USER:
      return { ...initialState, discover: { ...state.discover } };
    case a.SET_FIRST_TIME_USER:
      return { ...state, firstTimeUser: true };
    case a.UNSET_FIRST_TIME_USER:
      return { ...state, firstTimeUser: false };
    case a.LOGIN_COMPLETE:
      return { ...state, loginComplete: true, errors: "" };
    case a.SET_USER:
      return {
        ...state,
        user: { ...action.payload },
        errors: "",
      };
    default:
      return state;
  }
}
