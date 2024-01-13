import { FC } from 'react'
import './style.scss'
import Hero from './components/Hero'
import SearchPanel from './components/SearchPanel'
import OtherOpportunities from './components/OtherOpportunities'

const Home: FC = () => {
  return (
    <main>
      <Hero />
      <SearchPanel />
      <OtherOpportunities />
    </main>
  )
}

export default Home
