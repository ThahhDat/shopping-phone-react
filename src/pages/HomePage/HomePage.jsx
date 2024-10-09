import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'

const HomePage = () => {
    const arr = ['TV','Tu Lanh','LapTop']
  return (
    <>
     <div style={{padding: '0 120px'}}>
        <WrapperTypeProduct>
        {arr.map((item) => (
            <TypeProduct name={item} key ={item} />
        ))}
        </WrapperTypeProduct>
        </div>

        <div id='container' style={{ backgroundColor:'#F5F5FA', padding : '0 120px',height:'1000px'}} >

        <SliderComponent arrImage={[slider1, slider2, slider3]} />
        <div style={{marginTop:'20px',display:'flex', alignItems:'center', gap:'20px'}}>
            <CardComponent />   
            <CardComponent />   
        </div> e\
        {/* <NavbarComponent></NavbarComponent> */}
        </div>
    

    </>
   
  )
}

export default HomePage