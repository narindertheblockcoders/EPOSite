import React from 'react'
import Script from 'next/script'
import Link from 'next/link'

const Footer = () => {
  return (
    
        <footer className="footer-head py-3 " id='footer-set' style={{display:"flex", justifyContent:"center"}}>


    <p className="text-center text-muted" style={{fontSize:"14px",margin:"0"}}>© 2022 EPOS. All rights reserved | 
   <a href="" target="_blank" rel='noreferer'  style={{ color:"grey", paddingLeft:"0px", textDecoration:"none"}}>      Privacy & Terms   </a>   <span style={{paddingLeft:"0px"}}> |</span>    <a href="" target="_blank" rel='noreferer' className="systeme-show-popup-3443593" style={{ color:"grey", textDecoration:"none"}}>Contact us </a>
    </p>
 


  </footer>
    
  )
}

export default Footer