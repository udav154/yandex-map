import React from 'react';
import Header from '../views/Header/Combain';
import SideBar from '../views/SideBar/Combain'
import { Helmet } from 'react-helmet';

const Layout = ({ children, ...props }) => {
  const [open, setOpen] = React.useState(false);
  const drawerWidth = 530;

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const requareProperty = {
    open,
    drawerWidth,
    setOpen,
    toggleDrawer,
    ...props
  }
  return (
    <>

      <Header  {...requareProperty} >
      <SideBar   {...requareProperty} />
      {children()}
      </Header>


    </>
  )
}

export default Layout;