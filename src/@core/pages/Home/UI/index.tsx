import { FC } from 'react'
import dynamic from 'next/dynamic'
import Hero from './Hero'
import SearchPanel from './SearchPanel'
import PopularSearch from '@/@core/feature/PopularSearch/UI'

// dynamic imports
const OtherOpportunities = dynamic(() => import('./OtherOpportunities'))
const VideoInstruction = dynamic(() => import('./VideoInstruction'))
const Tariffs = dynamic(() => import('./Tariffs'))
const AddOrganization = dynamic(() => import('./addOrganization'))
const Partners = dynamic(() => import('./Partners'))
const Questionier = dynamic(() => import('./Questionier'))

const Home: FC = () => {
  return (
    <main id='home' className='fade-in'>
      <Hero />
      <SearchPanel />
      <PopularSearch />
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
