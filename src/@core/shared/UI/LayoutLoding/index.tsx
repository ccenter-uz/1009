import { Flex, Grid, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'
import LoaderUI from '../LoadingUI'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useLang } from '../../hooks/useLang'

type Props = {
  loading: boolean
  data: any[]
  children: JSX.Element
}

export const LayoutLoading: FC<Props> = props => {
  const { loading, data, children } = props
  const { t } = useLang()

  // LOADING
  if (loading)
    return (
      <Grid placeItems={'center'} h='100dvh'>
        <LoaderUI />
      </Grid>
    )

  // EMPTY-ITEM
  if (!loading && data?.length === 0)
    return (
      <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'} h='100%' gap={2}>
        <Image
          src='/empty-file.webp'
          alt='empty-file'
          width={{ base: '50px', sm: '50px', md: '80px', xl: '90px' }}
          height={{ base: '50px', sm: '50px', md: '80px', xl: '90px' }}
          loading='lazy'
        />
        <Text fontSize={scssVariables.fonts.paragraph}>{t('no-results')}</Text>
      </Flex>
    )

  return <>{children}</>
}
