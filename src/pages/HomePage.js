import React from 'react';
import Layout from '../views';
import { YMaps, Map, GeoObject } from 'react-yandex-maps';
import GeoObjectCom from '../components/GeoObject';


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
                  <GeoObjectCom coord={[[55.76, 37.6],[53, 35]]}/>
                  {/* <GeoObject geometry={{type: "Point", coordinates: [55.76,37.64], radius:1}} /> */}
                </Map>
              </YMaps>
        </>)
      }}
    </Layout>

  )
}

export default HomePage;