import { FC } from 'react'
import dynamic from 'next/dynamic'
import Hero from './components/Hero'
import SearchPanel from './components/SearchPanel'

// dynamic imports
const OtherOpportunities = dynamic(() => import('./components/OtherOpportunities'))
const VideoInstruction = dynamic(() => import('./components/VideoInstruction'))
const Tariffs = dynamic(() => import('./components/Tariffs'))
const AddOrganization = dynamic(() => import('./components/addOrganization'))
const Partners = dynamic(() => import('./components/Partners'))
const Questionier = dynamic(() => import('./components/Questionier'))

const Home: FC = () => {
  return (
    <main id='home' className='fade-in'>
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
