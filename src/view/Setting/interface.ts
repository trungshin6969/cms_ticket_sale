export type DateTime = { date: string; time: string };
export type PackageStatus = 'Đang áp dụng' | 'Tắt';

export interface ITicketPackageList {
  key: string;
  numericalOrder?: number;
  packageCode: string;
  packageName: string;
  dateOfUse: DateTime;
  expirationDate: DateTime;
  price: string;
  comboPrice?: string;
  packageStatus: PackageStatus;
}
