export enum InputTypeNameEnum {
  text = 'text',
  number = 'number',
  file = 'file',
}

export type WalletType = {
  [index:string]: string | number | undefined;
  id : string;
  address : string;
  amount :number | undefined;
  currency : string;
};
