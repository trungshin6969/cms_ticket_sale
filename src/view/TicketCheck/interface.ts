export type TicketStatus = 'Chưa đối soát' | 'Đã đối soát';

export interface ITicketCheck {
  key: string;
  numericalOrder?: number;
  ticketNumber: string;
  dateOfUse: string;
  ticketName: string;
  checkInGate: string;
  ticketStatus: TicketStatus;
}
