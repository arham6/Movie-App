import React from 'react'
import Form from './Form'
import FullPage from './FullPage'
import { useContext } from 'react'
import { SummaryContext } from '../context/SummaryProvider'
import Summary from './Summary'
import { FormContext } from '../context/FormProvider'

export default function MovieApp({apiData}) {

    const {buttonClick}=useContext(SummaryContext)
    const {formDirect}=useContext(FormContext)
    
    function render(){
        if(apiData && !buttonClick){
          return <FullPage apiData={apiData}/>
        }
        else if(buttonClick && !formDirect){
            return <Summary/>
        }
        else{
            return <Form/>
        }
      }

  return (
    <div>
        {render()}
    </div>
  )
}
