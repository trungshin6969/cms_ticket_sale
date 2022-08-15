import { IRouter } from '@routers/interface';

export const routerTicketManagement: IRouter = {
  path: '/ticket-management',
  loader: import('./index'),
  name: 'ticketManagement',
};
