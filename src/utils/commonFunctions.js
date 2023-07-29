export const jwtDecode = (t) => {
  if (t.includes('.')) {
    let token = {};
    token.raw = t;
    token.header = JSON.parse(window.atob(t.split('.')[0]));
    token.payload = JSON.parse(window.atob(t.split('.')[1]));
    return token;
  }
  return t;
};

/**
 * Function that sets cookies value using token
 */
export const setCookie = (cname, value) => {
  if (value) {
    const jwtData = jwtDecode(value);
    const d = jwtData?.payload?.exp
      ? new Date(jwtData?.payload?.exp * 1000).toUTCString()
      : new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString();
    const expires = 'expires=' + d;
    document.cookie =
      cname + '=' + btoa(JSON.stringify(value)) + ';' + expires + ';path=/';
  }
};

/**
 * Function that fetches cookie value
 */
export const getCookie = (cname) => {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0 && name.length !== c.length) {
      return atob(c.substring(name.length, c.length));
    }
  }
  return '';
};

/**
 * Function to delete cookie value
 */
export const deleteCookie = (cname) => {
  document.cookie = cname + '=; Path=/;max-age=0';
};

/**
 * Function to delete all cookie value
 */
export const deleteAllCookies = () => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    deleteCookie(name);
  }
};
