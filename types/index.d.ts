

interface  loginPageUrlFn{
  (env:string | undefined):string;
}
interface  serviceUrlFn{
  (env:string | undefined, isSocket: boolean | undefined):string;
}

interface Window {
  login_page_url: loginPageUrlFn,
  serviceUrl: serviceUrlFn
}