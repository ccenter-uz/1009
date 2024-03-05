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
  dataIndex?: string
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

interface Column {
  title: string
  key: string
}

export interface Row {
  [key: string]: string
}

export interface TableData {
  id: number
  header: Column[]
  rows: Row[]
}

// RICH EDITOR
export type IRichEditor = {
  isOpen: boolean
  onClose: SetStateAction<any>
  setGetAgain: Dispatch<SetStateAction<boolean>>
  value: string
  setValue: Dispatch<SetStateAction<any>>
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
  mention_ru: string
  table_arr: {
    table: TableData
  }
  table_arr_ru: {
    table: TableData
  }
  text: { content: { id: string | number; text: string }[] }
  title: string
  title_ru: string
  warning: string
  warning_ru: string
  type: 'text' | 'table'
}

export type IdataInfo = {
  id: string
  mention: string
  mention_ru: string
  warning: string
  warning_ru: string
  title: string
  title_ru: string
  type: 'text' | 'table'
  content?: { id: string | number; text: string }[]
  table_arr: {
    table: TableData[]
  }
  table_arr_ru: {
    table: TableData[]
  }
}

export type IcreateAccordionType = {
  open: boolean
  close: Dispatch<SetStateAction<boolean>>
  setGetAgain: Dispatch<SetStateAction<boolean>>
}
