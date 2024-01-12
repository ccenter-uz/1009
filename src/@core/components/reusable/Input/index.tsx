import { Input } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type Iinput = {
  children: string | ReactNode
}

const InputGen: FC<Iinput> = ({ children }) => {
  return <Input>{children}</Input>
}

export default InputGen
