export const getUserfromLocalStorage = localStorage.getItem("KeraFreshUser")
  ? JSON.parse(localStorage.getItem("KeraFreshUser"))
  : null;
