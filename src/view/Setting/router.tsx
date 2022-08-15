import { IRouter } from '@routers/interface';

export const routerSetting: IRouter = {
  path: '/setting',
  loader: import('./index'),
  name: 'Setting',
};
