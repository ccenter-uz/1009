import { FC } from 'react'
import Hero from './components/Hero'
import SearchPanel from './components/SearchPanel'
import OtherOpportunities from './components/OtherOpportunities'
import VideoInstruction from './components/VideoInstruction'
import Tariffs from './components/Tariffs'
import AddOrganization from './components/addOrganization'
import Partners from './components/Partners'
import Questionier from './components/Questionier'

const Home: FC = () => {
  return (
    <main>
      <Hero />
      <SearchPanel />
      <OtherOpportunities />
      <VideoInstruction />
      <Tariffs />
      <AddOrganization />
      <Partners />
      <Questionier />
    </main>
  )
}

export default Home
