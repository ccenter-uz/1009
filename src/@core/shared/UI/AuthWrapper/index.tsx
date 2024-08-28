import { FC } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Box, Spinner } from '@chakra-ui/react'

type AuthProps = {
  trulyComp: JSX.Element
  falsyComp: JSX.Element
}

const boxStyle = {
  w: '79px',
  h: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export const AuthWrapper: FC<AuthProps> = props => {
  const { trulyComp, falsyComp } = props
  const { isAuth } = useAuth()

  if (isAuth) return <Box sx={boxStyle}>{trulyComp}</Box>
  if (isAuth === null)
    return (
      <Box sx={boxStyle}>
        <Spinner width='25px' height='25px' color='teal' />
      </Box>
    )
  else return <Box sx={boxStyle}>{falsyComp}</Box>
}
