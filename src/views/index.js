import React from 'react';
import Header from '../views/Header/Combain';
import SideBar from '../views/SideBar/Combain'

const Layout = ({ children, ...props }) => {


  return (
    <>
      <header>
        <Header {...props}>
          <SideBar />
        </Header>
        {children()}
      </header>

    </>
  )
}

export default Layout;