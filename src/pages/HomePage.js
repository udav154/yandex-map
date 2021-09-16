import React from 'react';
import Layout  from '../views';



const HomePage = ({ ...props }) => {

  return (
    <Layout >
      {() => {
         return (
           <div>WELCOME HOME PAGE</div>
         ) 
      }}
    </Layout>

  )
}

export default HomePage;