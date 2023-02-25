import React from 'react'
// useContext
import { useContext } from 'react';
import { SomeContext } from '../Components/HookUseContext';

const About = () => {
  const {contextValue} = useContext(SomeContext);
  return (
    <div>
      <h2>About</h2>
      <hr />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
    </div>
  )
}

export default About