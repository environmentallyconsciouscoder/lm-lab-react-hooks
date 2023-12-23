import { useState, useContext } from 'react';
import { Child1 } from './child_1';

import { ThemeContext } from './data_provider';

export const Parent = () => {

    const {toggleTheme, type} = useContext(ThemeContext)

    return (
        <>

        <div className='section'>
            <h2>useContext</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Child1 themeValue={type} />
            <Child1 themeValue={type} />
        </div>
        </>
    )
}