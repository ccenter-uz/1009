export interface IErrors {
  section?: string
  subsection?: string
  sectionPS?: string
  subsectionPS?: string
  title?: string
  mainOrg?: string
  owner?: string
  // numbers?: INumbers
  email?: string
  index?: string
}

export interface ITouched {
  section?: boolean
  subsection?: boolean
  sectionPS?: boolean
  subsectionPS?: boolean
  title?: boolean
  mainOrg?: boolean
  owner?: boolean
  // numbers?: INumbers
  email?: boolean
  index?: boolean
}

export interface INumbers {
  id: string
}
