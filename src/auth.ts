export const isAuthenticated = () => {
  try {
    let user = JSON.parse(localStorage.getItem("user") || "");
    if (user.token) {
      return true;
    }
  } catch (err) {
    return false;
  }
};
