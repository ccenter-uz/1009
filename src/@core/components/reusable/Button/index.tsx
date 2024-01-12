import { Button } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type IButtonGen = {
  children: string | ReactNode
  width: string
  height: string
  radius: string
}

const ButtonGen: FC<Partial<IButtonGen>> = ({ children, width, height, radius }) => {
  return (
    <Button
      color={'#fff'}
      borderRadius={radius || '51px'}
      width={width || '243px'}
      height={height || '67px'}
      background={'linear-gradient(41.54deg, #0BA79D -1.84%, #00E3D6 114.36%)'}
    >
      {children}
    </Button>
  )
}

export default ButtonGen
