import { getCookie, setCookie, removeCookie} from '../src'
setCookie('name', 'value');
console.log(getCookie('name'));
removeCookie('name');
