import { createContext, useState } from "react";

export const SummaryContext=createContext(null);

const SummaryProvider=({children})=>{

    const [buttonClick,setButtonClick]=useState(null);

    return(
        <SummaryContext.Provider value={{
            buttonClick,
            setButtonClick
        }}>
            {children}
        </SummaryContext.Provider>
    )
}

export default SummaryProvider;