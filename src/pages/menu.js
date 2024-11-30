import React from 'react'
import Nav from '../components/Nav'
import Try_new from '../components/Menu_trynew'
import Menu_Dosa from '../components/Menu_Dosa'
import Menu_rice from '../components/Menu_rice'
import Menu_chicken from '../components/Menu_chicken'
import Footer from '../components/Footer'


export default function menu() {
  return (
    <div>
        <Nav/>
        <Try_new/>
        <Menu_Dosa/>
        <Menu_rice/>
        <Menu_chicken/>
        <Footer/>
    </div>
  )
}




