import {
  LOAD_CONTACT_LIST,
  AUTHORIZATION,
  SEARCH,
  IS_STAR,
  DELETE_CONTACT,
  EDIT_CONTACT,
  SAVE_EDIT_CONTACT,
  ADD_CONTACT,
} from "../Reducers/types";

import store from "../store";
import ApiService from "../Services/ApiService";

export const getContactList = () => async (dispatch) => {
  const res = await ApiService.getAll()
    .then((data) => {
      let List = data.data;
      return List;
    })
    .catch((err) => console.log(err, "CONTACT_LIST ERR ApiService"));
  return store.dispatch({
    type: LOAD_CONTACT_LIST,
    payload: res,
  });
};

export const addContacts = async (newContact) => {
  await ApiService.create(newContact);
  store.dispatch({
    type: ADD_CONTACT,
    payload: newContact,
  });
};

export const singIn = async (newAuth) => {
  const res = await ApiService.authorization(newAuth)
    .then(function (response) {
      localStorage.setItem("token", `Bearer ${response.data.access}`);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("user_id", response.data.user_id);

      let authorization = {
        token: response.data.access,
        username: response.data.username,
        user_id: response.data.user_id,
        isAuthenticated: true,
      };
      return authorization;
    })
    .catch((error) => {
      alert("Please try again");
    });
  store.dispatch({
    type: AUTHORIZATION,
    payload: res,
  });
};

export const singOut = () => {
  store.dispatch({
    type: AUTHORIZATION,
    payload: {},
  });
};

export const onSearch = (findContact) => {
  store.dispatch({
    type: SEARCH,
    payload: findContact,
  });
};

export const isStars = async (data) => {
  await ApiService.update(data.id, data);
  store.dispatch({
    type: IS_STAR,
    payload: data,
  });
};

export const DeleteContact = async (id) => {
  await ApiService.delete(id);
  store.dispatch({
    type: DELETE_CONTACT,
    payload: id,
  });
};

export const updateContact = (id) => {
  store.dispatch({
    type: EDIT_CONTACT,
    payload: id,
  });
};

export const saveEditContact = async (data) => {
  await ApiService.update(data.id, data);
  store.dispatch({
    type: SAVE_EDIT_CONTACT,
    payload: data,
  });
};
