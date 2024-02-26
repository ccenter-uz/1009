import { Dispatch, ReactNode, SetStateAction } from 'react'

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
  render?: any
}
export type IrowTable = {
  [key: string]: React.ReactNode
}
export type ItableType = {
  columns: IcolumnTable[]
  dataSource: IrowTable[]
  ColBg?: string
  RowBg?: string
  border?: boolean
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
  setGetAgain: Dispatch<SetStateAction<boolean>>
}

// Autocomplete
export type IOption = {
  value: string
  label: string
}

export type ISelectAutocomplelte = {
  options: IOption[]
  onSelect: (selectedOption: IOption) => void
}

// PAGINATION
export type IPagination = {
  total: number
  pageSize: number
  current: number
  onChange: (arg0: number) => void
  onPageSizeChange: (arg0: number) => void
}

export type IPaginationItems = {
  total: number
  pageSize: number
  current: number
}

export type IFilterTable = {
  open: boolean
  onChange: (values: any) => void
  children?: ReactNode
}

export type IdataInfoFromApi = {
  id: string
  mention: string
  table_arr: {
    header: any
    row: any
  }
  text: string
  title: string
  warning: string
  type: 'text' | 'table'
}

export type IdataInfo = {
  id: string
  mention: string
  warning: string
  title: string
  type: 'text' | 'table'
  content?: string
  rows?: any
  header?: any
}
