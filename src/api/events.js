import { API_URL } from "../constants";

export const getAllEvents = (onSuccess, onFailure) => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(events => {
      onSuccess(events);
    })
    .catch(err => {
      onFailure(err);
    });
};
