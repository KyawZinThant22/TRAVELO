import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const ScrollToUp = () => {
    const [scroll , setScroll] = useState(false)
    window.addEventListener('scroll', () => {
        window.pageYOffset > 200 ?  setScroll(true) : setScroll(false)
    })
    const toTop = () => {
        window.scrollTo({top:0})
    }
  return (
    <ToTop scroll = {scroll} onClick ={toTop} >

        <img src={logo} alt="" />
        
    </ToTop>
  )
}

export default ScrollToUp


const ToTop = styled.div`
    display: ${({scroll}) => (scroll ? "block" : "none")};
    position: fixed;
    bottom: 1rem;
    right: 2rem;
    cursor: pointer;
    z-index: 10;
    img{
        height: 1.5rem;
    }
    border-radius: 2rem;
    background-color: #1900ff39;
    padding: 1rem;
`