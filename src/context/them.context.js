    import React, { createContext, Component } from 'react';


export const ThemContext = createContext();

class ThemContextProvider extends Component {
    state = { 
        isLightTheme: true, 

        light: { syntax:'#555', ui: '#ddd', bg:'#eee'},
        dark: { syntax:'#ddd', ui: '#333', bg:'#555'}
     }

     toggleTheme = () => {
         this.setState({
             isLightTheme: !this.state.isLightTheme
         })
     }

    render() { 
        return (  
            <ThemContext.Provider value={{...this.state, toggleTheme:this.toggleTheme}}>
                {this.props.children}
            </ThemContext.Provider>
        );
    }
}
 
export default ThemContextProvider;