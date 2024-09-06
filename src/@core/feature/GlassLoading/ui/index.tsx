import { Box, Portal, Spinner } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {
  loading: boolean
}

export const GlassLoading: FC<Props> = props => {
  const { loading } = props

  return (
    <Portal>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 100,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(8px)',
          display: loading ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Spinner color='white' size={'xl'} />
      </Box>
    </Portal>
  )
}
