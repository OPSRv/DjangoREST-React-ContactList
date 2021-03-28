import {
  LOAD_CONTACT_LIST,
  AUTHORIZATION,
  SEARCH,
  IS_STAR,
  DELETE_CONTACT,
  EDIT_CONTACT,
  SAVE_EDIT_CONTACT,
  ADD_CONTACT,
} from "./types";

const initialState = {
  List: [],
  currentContact: {},
  findContact: "",
  loading: false,
  authorization: {
    token: localStorage.getItem("token"),
    username: localStorage.getItem("username"),
    user_id: localStorage.getItem("user_id"),
    isAuthenticated: localStorage.getItem("isAuthenticated"),
  },
};

const ContactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTACT_LIST:
      return {
        ...state,
        loading: true,
        List: action.payload,
      };

    case ADD_CONTACT:
      return {
        ...state,
        List: [...state.List, action.payload],
        loading: true,
      };

    case AUTHORIZATION:
      return {
        ...state,
        loading: true,
        authorization: action.payload,
      };

    case SEARCH:
      return {
        ...state,
        findContact: action.payload,
      };

    case IS_STAR:
      return {
        ...state,
        List: state.List.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              star: action.payload.star,
            };
          }
          return item;
        }),
      };

    case DELETE_CONTACT:
      return {
        ...state,
        List: state.List.filter((item) => item.id !== action.payload),
      };

    case EDIT_CONTACT:
      return {
        ...state,
        currentContact: state.List.filter((item) => item.id == action.payload),
      };

    case SAVE_EDIT_CONTACT:
      return {
        ...state,
        List: state.List.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };

    default:
      return state;
  }
};
export default ContactListReducer;
