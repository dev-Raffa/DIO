export interface AuthDto {
  isLogged: boolean;
  logIn: (email: string, password:string) => Promise<boolean>;
  logOut: () => void;
}