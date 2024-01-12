import { FC } from 'react'
import './style.scss'
import Hero from './components/Hero'
import SearchPanel from './components/SearchPanel'

const Home: FC = () => {
  return (
    <main>
      <Hero />
      <SearchPanel />
    </main>
  )
}

export default Home
