import BoxGen from '@/@core/components/reusable/Box'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Heading } from '@chakra-ui/react'
import { FC } from 'react'

const VideoInstruction: FC = () => {
  const { t } = useLang()

  return (
    <BoxGen
      className='wrapper'
      minH={{ base: '417px', sm: '417px', md: '817px', xl: '917px' }}
      h={'100%'}
      boxShadow={scssVariables.boxShadow}
      id={'help'}
    >
      <Box
        w={'100%'}
        h={{ base: '65px', sm: '65px', md: '85px', xl: '95px' }}
        bg={scssVariables.blockBgColor}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Heading
          textAlign={'center'}
          className='wrapper'
          fontWeight={600}
          fontSize={{ base: '16px', sm: '16px', md: '32px', xl: '32px' }}
          color={scssVariables.mainColor}
        >
          {t('instruction-title')}
        </Heading>
      </Box>
      <Box
        height={{ base: '200px', sm: '200px', md: '528px', xl: '528px' }}
        maxW={{ base: '90%', sm: '90%', md: '90%', xl: '937px' }}
        w={'100%'}
        bg={'lightgrey'}
        borderRadius={'12px'}
        mt={{ base: '30px', sm: '30px', md: '80px', xl: '123px' }}
        mx={'auto'}
      ></Box>
    </BoxGen>
  )
}

export default VideoInstruction
