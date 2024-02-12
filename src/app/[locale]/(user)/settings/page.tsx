import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Button, Card, Divider, FormControl, FormLabel, Input, SimpleGrid } from '@chakra-ui/react'
import { FC } from 'react'

const Settings: FC = () => {
  const breadcrumblinks = [
    {
      id: 1,
      title: 'Настройки'
    },
    {
      id: 2,
      title: 'Общие'
    }
  ]

  return (
    <Box id='settings' aria-label='section' className='wrapper'>
      <BreadCrumb item={breadcrumblinks} />
      <Card p={'2em'} boxShadow={scssVariables.boxShadow}>
        <form>
          <FormControl>
            <FormLabel htmlFor='fio-setting'>Ф.И.О:</FormLabel>
            <Input id='fio-setting' mb={{ base: '0.5em', sm: '0.5em', md: '1.5em', xl: '1em' }} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='oldPassword-setting'>Ведите Старый Пароль:</FormLabel>
            <Input id='oldPassword-setting' mb={{ base: '0.5em', sm: '0.5em', md: '1.5em', xl: '1em' }} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='newPassword-setting'>Новый Пароль:</FormLabel>
            <Input id='newPassword-setting' mb={{ base: '0.5em', sm: '0.5em', md: '1.5em', xl: '1em' }} />
          </FormControl>
          <Divider my={{ base: '0.5em', sm: '0.5em', md: '1.5em', xl: '1.5em' }} />
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2, xl: 2 }} gap={'24px'}>
            <FormControl>
              <FormLabel htmlFor='phone-setting'>Номер Телефона:</FormLabel>
              <Input id='phone-setting' mb={{ base: '0.5em', sm: '0.5em', md: '1.5em', xl: '1em' }} />
            </FormControl>
            <FormControl w={{ base: '100%', sm: '100%', md: '200px', xl: '200px' }}>
              <FormLabel htmlFor='code-setting'>Введите СМС Код:</FormLabel>
              <Input id='code-setting' mb={{ base: '0.5em', sm: '0.5em', md: '1.5em', xl: '1em' }} />
            </FormControl>
          </SimpleGrid>
          <Box
            mt={{ base: '0.5em', sm: '0.5em', md: '1.5em', xl: '1.5em' }}
            display={'flex'}
            justifyContent={'flex-end'}
            alignItems={'center'}
          >
            <Button colorScheme='teal'>Save</Button>
          </Box>
        </form>
      </Card>
    </Box>
  )
}

export default Settings
