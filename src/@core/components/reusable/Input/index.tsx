import { Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react'
import { FC, ReactNode, forwardRef } from 'react'

type Iinput = {
  width: string | InputProps
  button: ReactNode | null
  rightWidth: string | '100px' | any
}

const InputGen: FC<Partial<Iinput & InputProps>> = forwardRef(({ button = null, rightWidth, width, ...props }, ref) => {
  return (
    <InputGroup width={width}>
      <Input {...props} ref={ref} focusBorderColor='teal.400' _focus={{boxShadow:'none'}} />
      <InputRightElement width={rightWidth} h={'100%'}>
        {button}
      </InputRightElement>
    </InputGroup>
  )
})

export default InputGen
