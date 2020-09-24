import {
  UPDATE_USER_DISPLAYNAME,
  UPLOAD_USER_PROFILE,
  UPDATE_USER_EMAIL,
} from "./types";

const initialStateProfile = {
  displayName: null,
  uid: null,
  email: null,
};

export const profileReducer = (
  state = initialStateProfile,
  { type, payload }
) => {
  switch (type) {
    case UPLOAD_USER_PROFILE:
      return { ...payload.profile };
    case UPDATE_USER_DISPLAYNAME:
      return { ...state, displayName: payload.displayName };
    case UPDATE_USER_EMAIL:
      return { ...state, email: payload.email };
    default:
      return state;
  }
};
