export const getTokenFromLocalStorage = () => {
  if (localStorage && localStorage.getItem("accessKey")) {
    return JSON.parse(localStorage.getItem("accessKey")
    );
    
  }
  return null;
};
