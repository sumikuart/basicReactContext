    import React, { Component } from 'react';
    import {ThemContext} from '../context/them.context';
    import {AuthContext} from '../context/login.context';

    class Toggle extends Component {


        render() { 

            return ( 
                <AuthContext.Consumer>{(authContext) => (

                    <ThemContext.Consumer>{(themeContext) => {
                        
                    const {toggleTheme} = themeContext;
                    const {toggleAuth} = authContext;

                        return( 
                            <div>

                            <button onClick={toggleAuth}>Log in / Log out</button>
                            <button onClick={toggleTheme}>Light / Night Theme</button>
                                            
                            </div>
                 
                             )

                    }}

                </ThemContext.Consumer>)}

                </AuthContext.Consumer>

                
            );
        }
    }
    
    export default Toggle;