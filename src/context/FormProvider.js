import { createContext, useState } from "react";

export const FormContext=createContext(null);

const FormProvider=({children})=>{

    const [formDirect,setFormDirect]=useState(null);

    return(
        <FormContext.Provider value={{
            formDirect,
            setFormDirect
        }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider;