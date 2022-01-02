import { DISPLAY_MODAL, HIDE_MODAL } from "../constants";

export const showModal = (payload) => {
  return {
    type: DISPLAY_MODAL,
    payload,
  };
};
export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};
