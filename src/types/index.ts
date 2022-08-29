type LayoutProps = {
  children: React.ReactNode;
  title: string;
  active?: number;
  filterTicketBar?: React.ReactNode;
};

interface IProps {
  width?: string;
  height?: string;
  placeholder?: string;
}

type usageStatus = 'Đã sử dụng' | 'Chưa sử dụng' | 'Hết hạn';

type ticketStatus = 'Chưa đối soát' | 'Đã đối soát';

interface FamilyTicketPackage {
  key: string;
  numericalOrder: number;
  bookingCode: string;
  ticketNumber: string;
  usageStatus: usageStatus;
  dateOfUse: string;
  ticketReleaseDate: string;
  checkInGate: string;
}

interface EventTicketPackage {
  key: string;
  numericalOrder: number;
  bookingCode: string;
  ticketNumber: string;
  eventName: string;
  usageStatus: usageStatus;
  dateOfUse: string;
  ticketReleaseDate: string;
  checkInGate: string;
}

interface TicketCheck {
  key: string;
  numericalOrder?: number;
  ticketNumber: string;
  dateOfUse: string;
  ticketName: string;
  checkInGate: string;
  ticketStatus: ticketStatus;
}

export type {
  usageStatus,
  FamilyTicketPackage,
  EventTicketPackage,
  LayoutProps,
  IProps,
  ticketStatus,
  TicketCheck,
};
