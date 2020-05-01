export const registration = (data) => {
  return async (dispatch) => {
    console.log("registration data", data);
    dispatch({
      type: "USER_REGISTRATION_SUCCESS",
      data: data,
    });
  };
};
