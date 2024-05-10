import React from 'react'
import Dashheader from './Dashheader'
import Subheader from './Subheader'
import Body1 from './Body1'
import Footer from './Footer'
import Bigvideobox from './Bigvideobox'

const Studentsdash = () => {
  return (
    <>
      <Dashheader></Dashheader>
      <Subheader></Subheader>
      <Body1></Body1>
      <Bigvideobox viewed='Because you viewed “'vspan='DevOps Beginners to Advanced with Projects' extra='”' />
      <Bigvideobox viewed='Learners are viewing' />
      <Bigvideobox viewed='Short and sweet courses for you' />
      <Bigvideobox viewed='Top courses in Development' />
      <Footer></Footer>
    </>
  )
}

export default Studentsdash