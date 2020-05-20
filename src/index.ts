/**
 * Created by linchaoqun on 2017/4/10.
 */
export const getCookie = function (cName): string{
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(cName + '=');
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1;
      let cEnd = document.cookie.indexOf(';', cStart);
      if (cEnd === -1) cEnd = document.cookie.length;
      return decodeURI(document.cookie.substring(cStart, cEnd));
    }
  }
  return '';
};

export const setCookie = function setCookie(cName, value, expiredays = null, path  = null): void {
  const exdate = new Date();
  const cookieKeyValue = cName + '=' + encodeURI(value);
  let expiredaysString = '';
  let pathString = '';
  if (expiredays) {
    exdate.setDate(exdate.getDate() + expiredays);
    expiredaysString = ';expires=' + exdate.toUTCString();
  }
  if(path){
    pathString = ';Path=' + path;
  }
  document.cookie = cookieKeyValue + expiredaysString + pathString;
};

export const removeCookie = function setCookie(cName): void {
  const exdate = new Date();
  exdate.setDate(exdate.getDate() - 1000);
  document.cookie = cName + '=null;expires=' + exdate.toUTCString();
};
