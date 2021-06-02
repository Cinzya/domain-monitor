import {
  CLEAR_INPUT,
  DELETE_ROW,
  GET_DOMAIN,
  FETCH_DOMAIN_BEGIN,
  FETCH_DOMAIN_SUCCESS,
  FETCH_DOMAIN_FAILURE,
} from "../actions";

const initialState = {
  searchTerm: "",
  apiKey: "at_2CaxXPeBry5J0unwf7wfj9pQaaURI",
  loading: false,
  error: null,
  domains: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DOMAIN:
      return {
        ...state,
        searchTerm: action.payload,
      };

    case FETCH_DOMAIN_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_DOMAIN_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        domains: [...state.domains, action.payload],
      };

    case FETCH_DOMAIN_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        domains: [],
      };

    case CLEAR_INPUT:
      return {
        ...state,
        searchTerm: action.payload,
      };

    case DELETE_ROW:
      return {
        ...state,
        domains: [...state.domains, action.payload],
      };

    default:
      return state;
  }
}
