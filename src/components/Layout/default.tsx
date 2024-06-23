import React from 'react'

type Props = {
  children: any
}

const Layout: React.FC<Props>  = ({children}) => {
  return (
    <>
      {children}
    </>
  )
}

export default Layout