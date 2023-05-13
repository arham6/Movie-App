import React from 'react'
import Movie from './Movie'

export default function FullPage({apiData}) {
  return (
    <div className='movielist'>
        {apiData.map((val,i)=>{
                return <Movie key={i} title={val.show.name} image={val.show.image} language={val.show.language} runtime={val.show.runtime} summary={val.show.summary} type={val.show.type}/> 
        })}
    </div>
  )
}
