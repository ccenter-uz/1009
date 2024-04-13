import React from 'react'
import { useTranslations } from 'next-intl'
import BoxGen from '@/@core/shared/UI/Box'
import { Text } from '@chakra-ui/react'

const NotFoundPage = () => {
  const t = useTranslations()

  return (
    <BoxGen
      className='wrapper'
      aria-current={'page'}
      minH={'100dvh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      aria-label={'error-page'}
    >
      <Text fontWeight={600} fontSize={{ base: '16px', sm: '16px', md: '22px', xl: '24px' }}>
        {t('NOT_FOUND')}
      </Text>
    </BoxGen>
  )
}

export default NotFoundPage
