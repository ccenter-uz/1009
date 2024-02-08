import { SetStateAction } from 'react'

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
export type IcolumnTable = {
  title: string
  dataIndex: string
  key: string
  align?: 'left' | 'center' | 'right' | any
  width?: string
  height?: string
}
export type IrowTable = {
  key: string
  [key: string]: React.ReactNode
}
export type ItableType = {
  columns: IcolumnTable[]
  dataSource: IrowTable[]
  ColBg?: string
  RowBg?: string
  border?: boolean
  pagination?: boolean
}

type IGuestTableRow = {
  value: string
}
type IGuestTableColumn = {
  title: string
  id: number
}

export type IGuestTable = {
  row: IGuestTableRow[][]
  columns: IGuestTableColumn[]
}

// RICH EDITOR
export type IRichEditor = {
  isOpen: boolean
  onClose: SetStateAction<any>
  record: any
  setRecord: SetStateAction<any>
}


// Autocomplete
export type IOption= {
  value:string 
  label:string
}

export type ISelectAutocomplelte = {
options: IOption[]
onSelect: (selectedOption: IOption) => void
}
