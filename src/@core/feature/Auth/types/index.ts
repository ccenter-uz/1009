// signIn
export type Ilogin = {
  number: string
  password: string
}

// signUp user type
export type Iuser = {
  full_name: string
  number: string
  password: string
  confirm_password: string,
  userId?: string
}

// AUTH
export type Ipin = {
  pin: string,
  userId: string
}
