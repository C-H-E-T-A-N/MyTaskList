import React from 'react'

const Footer = () => {
    let footerstyle = {
        position: "relative",
        top:"70vh",
        bottom:"0",
        width: "100%",
    }
  return (
    <footer className='bg-dark text-light my-3' style={footerstyle}>
     <p className='text-center'>
     Copyright &copy; MyTaskList.com
     </p>
     
    </footer>
  )
}

export default Footer
