// import { routerLogin } from '@view/Auth/Login/router';
import { routerViewProfile } from '@view/Auth/Profile/router';
import { routerHomepage } from '@view/Homepage/router';

import { IRouter } from './interface';

export const privatePage: IRouter[] = [routerViewProfile];

export const publicPage: IRouter[] = [routerHomepage];
