import React from 'react';
import Layout from '../views';
import { YMaps, Map } from 'react-yandex-maps';



const HomePage = ({ ...props }) => {


  const mapState = { center: [55.76, 37.64], zoom: 10 };

  return (
    <Layout >
      {() => { 
        return (<>
              <YMaps query={{
                apikey: 'fd8e035c-672c-40c6-bafc-bf89cfb1e94e',
              }}>
                <Map width={'100%'} height={'100vh'} state={mapState}>
                </Map>
              </YMaps>
        </>)
      }}
    </Layout>

  )
}

export default HomePage;