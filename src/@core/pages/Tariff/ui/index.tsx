'use client'
import { FC } from 'react'
import TarifCard from './Card'
import { Box, Text } from '@chakra-ui/react'
import { activeCards, simpleCards } from '../model/db'
import { useLang } from '@/@core/shared/hooks/useLang'
import MentionText from '@/@core/shared/UI/MentionText'

type Props = {}

export const TariffPage: FC<Props> = () => {
  const { t } = useLang()
  const hasActive = true

  return (
    <main id='tarif' className='wrapper fade-in' aria-current='page'>
      <Box
        minH={'100dvh'}
        display={'flex'}
        flexDirection={'column'}
        gap={'2em'}
        mt={{ base: '2em', sm: '2em', md: '3em', xl: '3em' }}
        mb={{ base: '2em', sm: '2em', md: '5em', xl: '5em' }}
      >
        <Box className='active-part'>
          <Text
            fontSize={{ base: '12px', sm: '12px', md: '15px', xl: '15px' }}
            color='grey'
            mb={{ base: '8px', sm: '8px', md: '16px', xl: '16px' }}
          >
            {t('current_tariff')}
          </Text>
          {/* MAPPING-ACTIVE-CARDS */}
          {hasActive ? (
            activeCards.map(card => <TarifCard key={card.id} card={card} />)
          ) : (
            <Box
              h={'100px'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              bg={'whitesmoke'}
              borderRadius={'8px'}
            >
              <Text
                fontSize={{ base: '12px', sm: '12px', md: '15px', xl: '15px' }}
                textAlign={'center'}
                fontWeight={500}
              >
                {t('no_active_tariff')}
              </Text>
            </Box>
          )}
        </Box>

        <Box className='others-part' mt={{ base: '1em', sm: '1em', md: '3em', xl: '3em' }}>
          <Text
            fontSize={{ base: '12px', sm: '12px', md: '15px', xl: '15px' }}
            color='grey'
            mb={{ base: '8px', sm: '8px', md: '16px', xl: '16px' }}
          >
            {t('tariffs')}
          </Text>
          <Box display={'flex'} flexDirection={'column'} gap={'2em'}>
            {/* MAPPING-CARDS */}
            {simpleCards.map(card => (
              <TarifCard key={card.id} card={card} />
            ))}
          </Box>
        </Box>

        <Box className='others-part' mt={{ base: '1em', sm: '1em', md: '3em', xl: '3em' }}>
          <Text
            fontSize={{ base: '12px', sm: '12px', md: '15px', xl: '15px' }}
            color='grey'
            mb={{ base: '8px', sm: '8px', md: '16px', xl: '16px' }}
          >
            {t('about-tariffs')}
          </Text>
          <MentionText text={t('tariff-text')} />
          <Text fontSize={{ base: '12px', sm: '12px', md: '15px', xl: '15px' }}>{t('tariff-text-description')}</Text>
        </Box>
      </Box>
    </main>
  )
}
