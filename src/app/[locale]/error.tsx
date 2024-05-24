'use client'

import BoxGen from '@/@core/shared/UI/Box'
import { Text } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <BoxGen
      minH={'90dvh'}
      display={'flex'}
      flexDirection={'column'}
      gap={'16px'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Text role='h1' as={'h1'} fontWeight={600} fontSize={{ base: '16px', sm: '16px', md: '22px', xl: '22px' }}>
        Something went wrong!
      </Text>
      <button onClick={() => reset()}>Try again</button>
    </BoxGen>
  )
}
