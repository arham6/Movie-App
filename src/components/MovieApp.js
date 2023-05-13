import React from 'react'
import FullPage from './FullPage'
import { useContext } from 'react'
import { SummaryContext } from '../context/SummaryProvider'
import Summary from './Summary'
export default function MovieApp({apiData}) {
    const {buttonClick}=useContext(SummaryContext)
    //const {formDirect}=useContext(FormContext)
    function render(){
        if(apiData && !buttonClick){
          return <FullPage apiData={apiData}/>
        }
        else if(buttonClick){
            return <Summary title={apiData}/>
        }
        // else{
        //     return <Form/>
        // }
      }

  return (
    <div>
        {render()}
    </div>
  )
}
