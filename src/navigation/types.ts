export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type MainTabParamList = {
  Dashboard: undefined;
  Calendar: undefined;
  Inbox: undefined;
  Media: undefined;
  Files: undefined;
  Profile: undefined;
};

export type DashboardStackParamList = {
  DashboardHome: undefined;
  Analytics: undefined;
  Settings: undefined;
};

export type InboxStackParamList = {
  InboxHome: undefined;
  Conversation: { id: string; platform: string };
  Compose: undefined;
};

export type CalendarStackParamList = {
  CalendarHome: undefined;
  EventDetails: { id: string };
  CreateEvent: undefined;
};

export type MediaStackParamList = {
  MediaHome: undefined;
  MediaDetails: { id: string };
  Upload: undefined;
}; 