import React from 'react';

const Header = (props) =>{
  return (
    <header>
      <h1 className="container">{props.title}</h1>
    </header>
  )
}

export default Header;