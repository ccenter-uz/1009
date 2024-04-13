'use client'

import BoxGen from '@/@core/shared/UI/Box'
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
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </BoxGen>
  )
}
