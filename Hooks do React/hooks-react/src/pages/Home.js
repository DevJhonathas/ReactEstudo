import React from 'react'
import HookUseState from '../Components/HookUseState';
import HookUseReducer from '../Components/HookUseReducer';
import HookUseEffect from '../Components/HookUseEffect';
import HookUseRef from '../Components/HookUseRef';
import HookUseCallback from '../Components/HookUseCallback';
import HookUseMemo from '../Components/HookUseMemo';

// useContext
import { useContext } from 'react';
import { SomeContext } from '../Components/HookUseContext';
import HookUseLayoutEffect from '../Components/HookUseLayoutEffect';
import HookUseImperativeHandle from '../Components/HookUseImperativeHandle';
import HookCustom from '../Components/HookCustom';


const Home = () => {
  const {contextValue} = useContext(SomeContext);
  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
        <h2>useContext</h2>
        <p>Valor do context: {contextValue}</p>
        <hr />
        <HookUseRef/>
        <HookUseCallback />
        <HookUseMemo />
        <HookUseLayoutEffect />
        <HookUseImperativeHandle />
        <HookCustom />
    </div>
  )
}

export default Home