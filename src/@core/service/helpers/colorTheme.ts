import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    darkMode: {
      background: '#000'
    }
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'darkMode.background' : 'white',
        fontFamily: 'inherit'
      }
    })
  },
  components: {
    // Input
    Input: {
      baseStyle: {
        // Style for the input
      },
      defaultProps: {
        // Default props for the input
      },
      variants: {
        outline: (props: any) => ({
          field: {
            color: '#64748B',
            _placeholder: {
              color: props.colorMode === 'dark' ? '#64748B' : '#64748B'
            }
          }
        })
      }
    }
  }
})

export default theme
