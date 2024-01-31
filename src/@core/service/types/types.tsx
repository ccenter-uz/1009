// signUp user type
export type Iuser = {
  fio: string
  phone: string
  password: string
  confirm_password: string
}

// AUTH
export type Ipin = {
  pin: string
}
export type Ilogin = {
  number: string
  password: string
}

// TABLE 
export type IcolumnTable ={
  title: string;
  dataIndex: string;
  key: string;
  align?: 'left' | 'center' | 'right' | any;
  width?:string,
  height?:string
}
export type IrowTable ={
  key: string;
  [key: string]: React.ReactNode;
}
export type ItableType={
  columns:IcolumnTable[]
  dataSource:IrowTable[]
  variant :'striped' | 'simple',
  ColBg?:string
}