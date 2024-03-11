import { FC, ReactNode } from 'react'

type IOpporType = {
  children: ReactNode
}

const OpportunitiesLayout: FC<IOpporType> = ({ children }) => {
  return (
    <section className='wrapper'>
      {children}
    </section>
  )
}

export default OpportunitiesLayout
