import React from 'react'
import styled from 'styled-components'
import HeroSection from './Components/Herosection'
import Services from './Components/Services'
import Trusted from './Components/Trusted'
import FeatureProduct from './Components/FeatureProduct'

function Home() {
    return (
        <>
        
        
        <HeroSection mydata="GLOBE GOODS"/>
        <Services/>
        <FeatureProduct/>
        <Trusted/>

        </>
        
    )
}

const Wrapper = styled.section`
  
`

export default Home

