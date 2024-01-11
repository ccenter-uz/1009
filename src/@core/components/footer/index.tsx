import { FC } from 'react'
import { useLang } from '@/@core/service/hooks/useLang'

const Footer: FC = () => {
  const { t } = useLang()

  return (
    <footer className='footer'>
      <h1>FOOTER</h1>
    </footer>
  )
}

export default Footer
