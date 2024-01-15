import { Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type Iinput = {
  width: string | InputProps
  button: ReactNode | null
  rightWidth: string | '100px' | any
}

const InputGen: FC<Partial<Iinput & InputProps>> = ({ button = null, rightWidth, width, ...props }) => {
  return (
    <InputGroup width={width}>
      <Input {...props} focusBorderColor='teal.400' />
      <InputRightElement width={rightWidth} h={'100%'}>
        {button}
      </InputRightElement>
    </InputGroup>
  )
}

export default InputGen
