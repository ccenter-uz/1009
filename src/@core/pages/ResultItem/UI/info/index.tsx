import { useLang } from '@/@core/shared/hooks/useLang'
import { Box, Text, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'
import { useResultItemSlicer } from '../../model/Slicer'

const Info: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()
  const { resultItemData } = useResultItemSlicer()

  return (
    <Box my={{ base: '1em', sm: '1em', md: '64px', xl: '64px' }}>
      <Text
        fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '20px' }}
        color={'grey'}
        mb={{ base: '8px', sm: '8px', md: '16px', xl: '16px' }}
      >
        {t('main-company-info')}
      </Text>
      <Box
        wordBreak={'break-word'}
        fontSize={{ base: '11px', sm: '11px', md: '14px', xl: '14px' }}
        bg={'rgb(95 117 149 / 15%)'}
        p={{ base: '1em', sm: '1em', md: '16px', xl: '16px' }}
        borderRadius={'8px'}
        color={colorMode === 'dark' ? 'lightgrey' : 'rgba(100, 116, 139, 1)'}
      >
        {resultItemData[0]?.comment}
      </Box>
    </Box>
  )
}

export default Info
