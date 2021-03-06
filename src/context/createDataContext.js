import React,{useReducer} from "react";

export default (reducer,action,intialState)=>{
    const Context = React.createContext();

    const Provider = ({children})=>{
        const [state,dispatch] = useReducer(reducer,intialState);

        const boundAction ={};
        for(let key in action){
            boundAction[key] = action[key](dispatch);
        }

        return(
            <Context.Provider value={{data:state,...boundAction}}>
                {children}
            </Context.Provider>
        )
    }
    return {Context,Provider}
}