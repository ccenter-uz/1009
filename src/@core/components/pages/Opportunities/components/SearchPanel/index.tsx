import SelectAutocomplete from '@/@core/components/reusable/Autocomplete'
import { IOption, ISelectAutocomplelte } from '@/@core/service/types/types'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, FormControl, FormLabel, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'



const SearchPanelOpportunities: FC<Pick<ISelectAutocomplelte, 'options'>> = ({options}) => {
  const { colorMode } = useColorMode()
 

  const handleSelect = (selectedOption: IOption) => {
    console.log('Selected:', selectedOption.value)
  }

  return (
    <Box
      h={{ base: '70px', sm: '70px', md: '171px', xl: '171px' }}
      w={{ base: '100%', sm: '100%', md: '975px', xl: '975px' }}
      m={{ base: '16px auto', sm: '16px auto', md: '24px auto', xl: '24px auto' }}
      borderRadius={{ base: '6px', sm: '6px', md: '16px', xl: '16px' }}
      bg={colorMode === 'dark' ? scssVariables.darkBg : scssVariables.blockBgColor}
      pt={{ base: '15px', sm: '15px', md: '31px', xl: '31px' }}
      px={'16px'}
      display={'flex'}
      justifyContent={'center'}
      boxShadow={scssVariables.boxShadowPartnerBox}
    >
      <Box w={{ base: '100%', sm: '100%', md: '625px', xl: '625px' }}>
        <form id='search-panel-opportunities' aria-label='form-opportunities'>
          <FormControl>
            <FormLabel display={{ base: 'none', sm: 'none', md: 'block', xl: 'block' }} htmlFor='search-opportunities'>
              Поиск:
            </FormLabel>
            <SelectAutocomplete options={options} onSelect={handleSelect} />
          </FormControl>
        </form>
      </Box>
    </Box>
  )
}

export default SearchPanelOpportunities
