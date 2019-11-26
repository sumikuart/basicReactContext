import React, { Component } from 'react'

import {ThemContext} from '../context/them.context'

class Navbar  extends Component {

    static contextType = ThemContext;

    render() { 
        console.log(this.context)
        const { isLightTheme, light, dark} = this.context

        const theme = isLightTheme ? light : dark; 

        return (  
            <div style={{ background:theme.ui, color: theme.syntax}}>
                <nav>
                    <h1>Context App</h1>

                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                </nav>
            </div>
        );
    }
}
 
export default Navbar;