import { buildUrlParams } from '@/@core/apps/utils/fn'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useLang } from '@/@core/shared/hooks/useLang'
import { Box, Button, CloseButton, FormControl, FormLabel, Input, Select, SimpleGrid, Text } from '@chakra-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Dispatch, FC, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

const style = {
  inputStyle: {
    fontSize: scssVariables.fonts.paragraph,
    h: { base: '30px', sm: '30px', md: '40px', xl: '40px' },
    borderRadius: '4px',
    border: '1px solid lightgrey',
    _focus: { boxShadow: 'none', border: '1px solid teal' },
    bg: '#fff'
  },
  buttonStyle: {
    w: { base: '100px', sm: '100px', md: '230px', xl: '236px' },
    h: { base: '30px', sm: '30px', md: '40px', xl: '40px' },
    _hover: { opacity: 0.7, transition: 'all 0.5s ease' },
    color: '#fff',
    fontWeight: 400,
    fontSize: scssVariables.fonts.paragraph
  },
  bannerStyle: {
    w: '100%',
    h: { base: '50px', sm: '50px', md: '65px', xl: '70px' },
    bg: 'rgba(9, 205, 205, 1)',
    borderRadius: '6px 6px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    p: '1em',
    fontSize: { base: '16px', sm: '16px', md: '22px', xl: '24px' },
    color: '#fff',

    top: 0,
    zIndex: 99
  },
  main: {
    bg: '#ffffff',
    overflow: { base: 'scroll', sm: 'scroll', md: 'scroll', xl: 'hidden' },
    transition: 'height 0.5s ease-in',
    backdropBlur: '10px',
    borderRadius: '6px',
    w: '100%'
  }
}

type IMoreFilterType = {
  open: boolean
  close: Dispatch<SetStateAction<boolean>>
}

const MoreFilter: FC<IMoreFilterType> = ({ open, close }) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { t } = useLang()
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      nameorg: searchParams.get('nameorg'),
      razdel: searchParams.get('razdel'),
      podrazdel: searchParams.get('podrazdel'),
      section: searchParams.get('section'),
      segment: searchParams.get('segment'),
      mainorg: searchParams.get('mainorg'),
      region: searchParams.get('region'),
      city: searchParams.get('city'),
      district: searchParams.get('district'),
      house: searchParams.get('house'),
      home: searchParams.get('home')
    }
  })

  // SAVE
  const handleFinish = (values: any) => {
    const query = buildUrlParams(searchParams, values)
    router.push(query)
  }

  // CLEAR
  const clear = () => {
    reset({
      nameorg: '',
      razdel: '',
      podrazdel: '',
      section: '',
      segment: '',
      mainorg: '',
      region: '',
      city: '',
      district: '',
      house: '',
      home: ''
    })
    router.push(`?page=1&pageSize=10`)
  }

  return (
    <Box {...style.main} h={open ? '480px' : '0'}>
      <Box position={'sticky'} {...style.bannerStyle}>
        {t('more_filter')}
        <CloseButton role='button' onClick={() => close(false)} />
      </Box>
      <Box p={{ base: '8px 10px', sm: '8px 10px', md: '1em', xl: '1em' }}>
        <form id='more-filter' onSubmit={handleSubmit(handleFinish)}>
          <Text
            color={'grey'}
            fontSize={{ base: '11px', sm: '11px', md: '13px', xl: '14px' }}
            mb={{ base: '16px', sm: '16px', md: '20px', xl: '23px' }}
          >
            {t('fill_the_field')}
          </Text>
          <SimpleGrid
            columns={{ base: 1, sm: 1, md: 3, xl: 4 }}
            gap={{ base: '10px', sm: '10px', md: '15px 23px', xl: '16px 24px' }}
          >
            <FormControl>
              <FormLabel fontSize={scssVariables.fonts.paragraph} htmlFor='nameorg'>
                {t('org_name')}
              </FormLabel>
              <Input {...style.inputStyle} {...register('nameorg')} placeholder='Кафе' id='nameorg' />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={scssVariables.fonts.paragraph} htmlFor='razdel'>
                {t('razdel')}
              </FormLabel>
              <Select {...style.inputStyle} {...register('razdel')} id='razdel'>
                <option value='1'>Apteka</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={scssVariables.fonts.paragraph} htmlFor='podrazdel'>
                {t('podrazdel')}
              </FormLabel>
              <Select {...style.inputStyle} {...register('podrazdel')} id='podrazdel'>
                <option value='1'>Общие пит</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={scssVariables.fonts.paragraph} htmlFor='section'>
                {t('section')}
              </FormLabel>
              <Select {...style.inputStyle} {...register('section')} id='section'>
                <option value='1'>ishlab chiqarish</option>
                <option value='1'>xizmat ko'rsatish</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={scssVariables.fonts.paragraph} htmlFor='mainorg'>
                {t('main_org')}
              </FormLabel>
              <Select {...style.inputStyle} {...register('mainorg')} id='mainorg'>
                <option value='1'>Muqimiy</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={scssVariables.fonts.paragraph} htmlFor='segment'>
                {t('segment')}
              </FormLabel>
              <Input {...style.inputStyle} {...register('segment')} placeholder={t('segment')} id='segment' />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={scssVariables.fonts.paragraph} htmlFor='region'>
                {t('region')}
              </FormLabel>
              <Select {...style.inputStyle} {...register('region')} id='region'>
                <option value='1'>Tashkent shahar</option>
                <option value='2'>Tashkent viloyat</option>
                <option value='3'>Samarqand viloyati</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={scssVariables.fonts.paragraph} htmlFor='city'>
                {t('city')}
              </FormLabel>
              <Select {...style.inputStyle} {...register('city')} id='city'>
                <option value='1'>Tashkent</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={scssVariables.fonts.paragraph} htmlFor='district'>
                {t('district')}
              </FormLabel>
              <Select {...style.inputStyle} {...register('district')} id='district'>
                <option value='1'>Uchtepa tumani</option>
                <option value='2'>Chilonzor tumani</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={scssVariables.fonts.paragraph} htmlFor='house'>
                {t('house')}
              </FormLabel>
              <Input {...style.inputStyle} {...register('house')} placeholder={t('house')} id='house' />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={scssVariables.fonts.paragraph} htmlFor='home'>
                {t('kv')}
              </FormLabel>
              <Input {...style.inputStyle} {...register('home')} placeholder={t('kv')} id='home' />
            </FormControl>
          </SimpleGrid>
          <Box mt={'36px'} display={'flex'} alignItems={'center'} justifyContent={'flex-end'} gap={'13px'}>
            <Button onClick={clear} {...style.buttonStyle} bg={'#a9a9a9'}>
              {t('reset')}
            </Button>
            <Button type='submit' form='more-filter' {...style.buttonStyle} bg={'rgba(9, 205, 205, 1)'}>
              {t('search')}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default MoreFilter
