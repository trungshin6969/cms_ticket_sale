export type UsageStatus = 'Đã sử dụng' | 'Chưa sử dụng' | 'Hết hạn';

export interface IFamilyTicketPackage {
  key: string;
  numericalOrder: number;
  bookingCode: string;
  ticketNumber: string;
  usageStatus: UsageStatus;
  dateOfUse: string;
  ticketReleaseDate: string;
  checkInGate: string;
}

export interface IEventTicketPackage {
  key: string;
  numericalOrder: number;
  bookingCode: string;
  ticketNumber: string;
  eventName: string;
  usageStatus: UsageStatus;
  dateOfUse: string;
  ticketReleaseDate: string;
  checkInGate: string;
}
