export interface ILinks {
  [key: string]: string;
}
export interface IGetLinksResponse {
  shortened_urls: ILinks;
}
export interface IEncodeResponse {
  link: string;
}
export interface IDecodeResponse {
  link: string;
}
