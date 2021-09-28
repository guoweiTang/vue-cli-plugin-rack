export interface CommonData {
  isScreen: boolean;
  activeRoute: {
    name: string;
  }
}
export interface UserInfo {
  avatarUrl?: string;
  name?: string;
  gender?: string;
  summary?: string;
  description?: string;
  role?: string;
}
export interface UserData {
  token: {
    access_token?: string;
    refresh_token?: string;
  };
  userInfo: UserInfo;
}