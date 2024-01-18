import { FormControl, FormLabel, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import { FC } from 'react'
import { useLang } from '@/@core/service/hooks/useLang'

const CheckNumber: FC = () => {
  const { t } = useLang()

  const handleComplete = async (value: string | number) => [console.log(value, 'values')]

  return (
    <form id='checkNumber'>
      <FormControl>
        <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>{t('auth-check-number')}</FormLabel>
        <HStack>
          <PinInput size='md' onComplete={handleComplete}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </FormControl>
    </form>
  )
}

export default CheckNumber
