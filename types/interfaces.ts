export interface INavItem {
  readonly link: string;
  readonly label: string;
}

export interface IUser {
  readonly email?: string;
  readonly number?: string;
  readonly createdAt: string;
  readonly id: string;
}
