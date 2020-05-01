const defaultState = {
  createdUser: [],
  message: "",
  messageType: "",
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "USER_REGISTRATION_SUCCESS":
      return {
        ...state,
        createdUser: [...state.createdUser, action.data],
        message: "User created successfully",
        messageType: "success",
      };
    default:
      return state;
  }
}
