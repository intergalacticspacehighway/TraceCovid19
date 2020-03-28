export interface INearbyUser {
  uuid: string;
  location?: {lat: number; long: number};
  distance: number;
  createdAt?: any;
  updatedAt?: any;
}

export interface IOnScanResult {
  txPower?: number;
  rssi: number;
  deviceId: string;
}

export interface IUser {
  uuid: string;
}
