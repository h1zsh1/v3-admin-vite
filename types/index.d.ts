

interface  loginPageUrlFn{
  (env:string | undefined):string;
}
interface  serviceUrlFn{
  (env:string | undefined, serverName:string | undefined, isSocket: number | undefined):string;
}

interface Window {
  login_page_url: loginPageUrlFn,
  serviceUrl: serviceUrlFn
}