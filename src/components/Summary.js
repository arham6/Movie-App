import React from 'react'
import { useContext } from 'react'
import { SummaryContext } from '../context/SummaryProvider'
import { FormContext } from '../context/FormProvider'
export default function Summary() {
    // const {setFormDirect}=useContext(FormContext)
    
    const {buttonClick}=useContext(SummaryContext)
  return (
        <div>
            <h1>Summary:</h1>
            <div dangerouslySetInnerHTML={{__html: buttonClick}}/>
            <button >Book Tickets</button>
        </div>
        
        

    

  )
}
