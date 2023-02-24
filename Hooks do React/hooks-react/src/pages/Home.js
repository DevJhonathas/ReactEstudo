import React from 'react'
import HookUseState from '../Components/HookUseState';
import HookUseReducer from '../Components/HookUseReducer';
import HookUseEffect from '../Components/HookUseEffect';

const Home = () => {
  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
    </div>
  )
}

export default Home