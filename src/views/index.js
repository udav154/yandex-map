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
      <Helmet>
        {/* <script src="https://api-maps.yandex.ru/2.1/?apikey=fd8e035c-672c-40c6-bafc-bf89cfb1e94e&lang=ru_RU" type="text/javascript"></script>
        <script src="mapbasics.js" type="text/javascript"></script> */}
        {/* <script src="https://api-maps.yandex.ru/2.0-stable/?apikey=fd8e035c-672c-40c6-bafc-bf89cfb1e94e&load=package.full&lang=ru-RU" type="text/javascript"></script> */}
      </Helmet>

      <Header  {...requareProperty} >
      <SideBar   {...requareProperty} />
      {children()}
      </Header>


    </>
  )
}

export default Layout;