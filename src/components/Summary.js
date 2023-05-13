import React from 'react'
import { useContext } from 'react'
import { SummaryContext } from '../context/SummaryProvider'
import { FormContext } from '../context/FormProvider'

export default function Summary() {

    const {setFormDirect}=useContext(FormContext)
    const {buttonClick}=useContext(SummaryContext)

    function handleOnClick(){
        setFormDirect(buttonClick.name)
    }
    
  return (
    <div className='summaryMainDiv'>
        <h1>Summary of '{buttonClick.name}'</h1>
        <div dangerouslySetInnerHTML={{__html: buttonClick.summary}}/>
        <button onClick={handleOnClick} type="button" className="btn btn-primary">Book Tickets</button>
    </div>
  )
}
