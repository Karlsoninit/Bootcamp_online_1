import { UPLOAD_USER_PROFILE } from "./types";

export const uploadProfileAction = (profile) => ({
  type: UPLOAD_USER_PROFILE,
  payload: { profile },
});
