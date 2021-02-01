export const isAuthenticated = () => {
  try {
    let token = localStorage.getItem('token') || "";
    if(token) {
      return true;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
