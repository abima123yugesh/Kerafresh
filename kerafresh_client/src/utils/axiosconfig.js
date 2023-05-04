const getTokenFromLocalStorage = localStorage.getItem("KeraFreshUser")
  ? JSON.parse(localStorage.getItem("KeraFreshUser"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
