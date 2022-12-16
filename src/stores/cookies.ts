import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const ARTIST_CODE = 'artistCode';

export const setCookie = (artistCode: string) => {
  cookies.set(ARTIST_CODE, artistCode);
  return;
};

export const getCookie = () => {
  return cookies.get(ARTIST_CODE);
};

export const removeCookie = () => {
  return cookies.remove(ARTIST_CODE);
};
