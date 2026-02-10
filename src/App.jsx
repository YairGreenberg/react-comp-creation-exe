import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Header from './components/header'
import Cards from './components/cards'
import Footer from './components/footer'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='scrin' >
      <Header></Header>
      <div className='board'>
      <Cards type="Teacher"
      name="Avi Fisher"
      img="https://t4.ftcdn.net/jpg/08/08/37/31/360_F_808373133_lrCrFLLTXF0A2WQK7QKMCNAzKCjX7kvb.jpg"></Cards>
      <Cards type="Friend"
      name="orel or"
       img="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"></Cards>
      <Cards type="Student"
      name="Yair Greenberg"
       img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg
       "></Cards>
      <Cards type="Student"
      name="Yair Greenberg"
       img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg
       "></Cards>
      <Cards type="Student"
      name="Yair Greenberg"
       img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg
       "></Cards>
      <Cards type="Student"
      name="Yair Greenberg"
       img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg
       "></Cards>
      <Cards type="Student"
      name="Yair Greenberg"
       img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg
       "></Cards>
      <Cards type="Student"
      name="Yair Greenberg"
       img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg
       "></Cards>
      <Cards type="Student"
      name="Yair Greenberg"
       img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg
       "></Cards>
      <Cards type="Friend"
      name="Yair Greenberg"
       img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg
       "></Cards>
      <Cards type="Student"
      name="Yair Greenberg"
       img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg
       "></Cards>
      <Cards type="Student"
      name="Yair Greenberg"
       img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg
       "></Cards>
      <Cards type="Student"
      name="Yair Greenberg"
       img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg
       "></Cards>
      <Cards type="Friend"
      name="Yair Greenberg"
       img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg
       "></Cards>
      <Cards type="Student"
      name="Yair Greenberg"
       img="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg
       "></Cards>
      </div>
      <Footer></Footer>

    </div>

  )
}

export default App
