import React, { useContext } from 'react'
import HeroSection from './Components/Herosection'
import Services from './Components/Services'
import Trusted from './Components/Trusted'
import { AppContext , useProductContext } from './Conetxt/Productcontext'
function About() {

    
    // const {myname} = useProductContext();


    const data ={
        name: "MY STORE"
    }
    // const data = "tanishq"
    



    return (
        <div>
            {/* {myname} */}
            <HeroSection   mydata={data.name}/>
            <Services/>
            <Trusted/>

        </div>
    )
}

export default About
