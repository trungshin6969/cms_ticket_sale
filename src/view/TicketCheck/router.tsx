import { IRouter } from '@routers/interface';

export const routerTicketCheck: IRouter = {
  path: '/ticket-check',
  loader: import('./index'),
  name: 'ticketCheck',
};
