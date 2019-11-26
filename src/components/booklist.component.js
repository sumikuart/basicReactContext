import React, { Component } from 'react';
import {ThemContext} from '../context/them.context';
import {AuthContext} from '../context/login.context';


class Booklist extends Component {
    static contextType = ThemContext;

    render() { 

        return ( 
                 <AuthContext.Consumer>{(authContext) => (
        <ThemContext.Consumer>{(themeContext) => {

            const { isLightTheme, light, dark} =themeContext
            const theme = isLightTheme ? light : dark; 
            const {isAuth} = authContext;

            return(
                 <div className="booklist" style={{ background:theme.bg, color: theme.syntax}}>

                     <p>{isAuth ? 'Online' : 'Offline'}</p>
                <ul>
                        <li style={{background: theme.ui}}>Nana</li>
                        <li style={{background: theme.ui}}>Paradise Kiss</li>
                        <li style={{background: theme.ui}}>Princess Ai</li>
                </ul>

            </div>
            )}}
            
        </ThemContext.Consumer>)}
        </AuthContext.Consumer>
        );
    }
}
 
export default Booklist;