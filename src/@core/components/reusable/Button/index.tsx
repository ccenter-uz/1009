import { Button } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type IButtonGen = {
  children: string | ReactNode
  width: string
  height: string
  radius: string
  onClick: () => void
}

const ButtonGen: FC<Partial<IButtonGen>> = ({ children, width, height, radius, onClick }) => {
  return (
    <Button
      onClick={onClick}
      color={'#fff'}
      borderRadius={radius || '51px'}
      width={width || '243px'}
      height={height || '67px'}
      background={'linear-gradient(41.54deg, #0BA79D -1.84%, #00E3D6 114.36%)'}
      _hover={{ opacity: '0.8' }}
      _active={{ transform: 'scale(0.95)' }}
    >
      {children}
    </Button>
  )
}

export default ButtonGen