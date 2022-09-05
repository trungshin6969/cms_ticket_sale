import { IRouter } from '@routers/interface';

export const routerHomepage: IRouter = {
  path: '/',
  loader: import('./index'),
  name: 'homepage.name', //translate here for breadcrumb and sidebar
};
