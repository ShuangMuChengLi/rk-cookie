cookie工具类的npm包

# Install
````
yarn add rk-cookie
````
# Usage&Test
````
import { getCookie, setCookie, removeCookie} from 'rk-cookie'
setCookie('name', 'value');
console.log(getCookie('name'));
removeCookie('name');

````