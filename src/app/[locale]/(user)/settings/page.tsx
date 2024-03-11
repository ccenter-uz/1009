import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Text } from '@chakra-ui/react'
import { FC } from 'react'
import BoxGen from '@/@core/components/reusable/Box'
import SettingChangeData from './_components/changedata'
import SettingChangePhone from './_components/changephone'

// styles
const styles = {
  inputStyle: {
    h: { base: '30px', sm: '30px', md: '40px', xl: '40px' },
    borderRadius: '4px',
    _focus: { boxShadow: '0 0 0.5px 0.5px teal' },
    style: { borderColor: 'lightgrey' }
  },
  formControlStyle: {
    mb: { base: '0.5em', sm: '0.5em', md: '1em', xl: '1em' }
  },
  buttonStyle: {
    h: { base: '30px', sm: '30px', md: '40px', xl: '40px' },
    fontSize: scssVariables.fonts.paragraph,
    colorScheme: 'teal'
  },
  labelStyle: {
    fontWeight: 400,
    color: 'grey',
    fontSize: scssVariables.fonts.paragraph
  },
  textStyle: {
    fontWeight: 600,
    mb: '1em',
    fontSize: { base: '13px', sm: '13px', md: '18px', xl: '18px' }
  },
  buttonBoxStyle: {
    mt: { base: '0.5em', sm: '0.5em', md: '1.5em', xl: '1.5em' },
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
}

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
    <Box
      id='settings'
      minH={'100dvh'}
      aria-label='section'
      className='wrapper fade-in'
    >
      <BreadCrumb item={breadcrumblinks} />
      <BoxGen
        p={{ base: '1em', sm: '1em', md: '2em', xl: '2em' }}
        borderRadius={'8px'}
        boxShadow={scssVariables.boxShadow}
      >
        {/* data */}
        <Text {...styles.textStyle}>Изменить данные о пользователя</Text>
        <SettingChangeData styles={styles} />
        {/* phone */}
        <SettingChangePhone styles={styles} />
      </BoxGen>
    </Box>
  )
}

export default Settings
