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
  profile: {},
  friends: [],
  relationships: {
    followers: [],
    following: [],
    blocked: [],
  },
  userContentList: {
    movies: [],
    tvShows: [],
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
    case a.FETCH_QUERY:
      return {
        ...state,
        queryResults: action.payload,
        isFetching: false,
        errors: "",
      };
    case a.FETCH_ERROR:
      return {
        ...state,
        errors: action.payload,
        isFetching: false,
      };
    case a.FETCHING_COMPLETE:
      return { ...state, isFetching: false };
    case a.SET_USER_MOVIES:
      return {
        ...state,
        isFetching: false,
        userContent: {
          movies: [...action.payload],
          tvShows: [...state.userContent.tvShows],
        },
        errors: "",
      };
    case a.SET_USER_TV_SHOWS:
      return {
        ...state,
        isFetching: false,
        userContent: {
          movies: [...state.userContent.movies],
          tvShows: [...action.payload],
        },
        errors: "",
      };
      case a.SET_FOLLOWER:
        return {
          ...state,
          isFetching: false,
          relationships: { 
            followers: [...state.relationships.followers, action.payload],
            following: [...state.relationships.following],
            blocked: [...state.relationships.blocked]
           },
          errors: "",
        }
        case a.SET_FOLLOWING:
          return {
            ...state,
            isFetching: false,
            relationships: { 
              followers: [...state.relationships.followers],
              following: [...state.relationships.following, action.payload],
              blocked: [...state.relationships.blocked]
             },
            errors: "",
          }
      case a.SET_BLOCKED_USERS:
        return {
          ...state,
          isFetching: false,
          relationships: { 
            followers: [...state.relationships.followers],
            following: [...state.relationships.following],
            blocked: [...state.relationships.blocked, action.payload]
           },
          errors: "",
        }
    case a.SET_ITEM_MOVIE:
      return {
        ...state,
        item: { movie: action.payload },
        isFetching: false,
        errors: "",
      };
    case a.SET_ITEM_TV_SHOW:
      return {
        ...state,
        item: { tvShow: action.payload },
        isFetching: false,
        errors: "",
      };
    case a.UNSET_ITEM:
      return {
        ...state,
        item: {},
      }
    case a.GET_FRIENDS:
      return {
        ...state,
        friends: action.payload,
        isFetching: false,
        errors: "",
      };
    case a.ADD_USER_MOVIE_CONTENT:
      return {
        ...state,
        isFetching: false,
        userContentList: {
          movies: [...state.userContentList.movies, action.payload],
          tvShows: [...state.userContentList.tvShows],
        },
        errors: "",
      };
    case a.CLEAR_USER_MOVIE_LIST:
      return {
        ...state,
        isFetching: false,
        userContentList: {
          movies: [],
          tvShows: [...state.userContentList.tvShows],
        },
        errors: "",
      };
    case a.ADD_USER_TV_CONTENT:
      return {
        ...state,
        isFetching: false,
        userContentList: {
          movies: [...state.userContentList.movies],
          tvShows: [...state.userContentList.tvShows, action.payload],
        },
        errors: "",
      };
    case a.CLEAR_USER_TV_LIST:
      return {
        ...state,
        isFetching: false,
        userContentList: {
          movies: [...state.userContentList.movies],
          tvShows: [],
        },
        errors: "",
      };
    case a.SET_FRIEND:
      return {
        ...state,
        isFetching: false,
        friend: { ...action.payload },
        errors: "",
      }
    case a.ADD_FRIEND_MOVIE_CONTENT:
      return {
        ...state,
        isFetching: false,
        friendContentList: {
          movies: [...state.friendContentList.movies, action.payload],
          tvShows: [...state.friendContentList.tvShows],
        },
        errors: "",
      };
    case a.CLEAR_FRIEND_MOVIE_LIST:
      return {
        ...state,
        isFetching: false,
        friendContentList: {
          movies: [],
          tvShows: [...state.friendContentList.tvShows],
        },
        errors: "",
      };
    case a.ADD_FRIEND_TV_CONTENT:
      return {
        ...state,
        isFetching: false,
        friendContentList: {
          movies: [...state.friendContentList.movies],
          tvShows: [...state.friendContentList.tvShows, action.payload],
        },
        errors: "",
      };
    case a.CLEAR_FRIEND_TV_LIST:
      return {
        ...state,
        isFetching: false,
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
        isFetching: false,
        errors: "",
      };
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
        isFetching: false,
        errors: "",
      };
    case a.SET_PROFILE:
      return {
        ...state,
        profile: { ...action.payload },
        isFetching: false,
        errors: "",
      };
    default:
      return state;
  }
}
