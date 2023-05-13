import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieApp from './components/MovieApp';
import SummaryProvider from './context/SummaryProvider';
import { FormContext } from './context/FormProvider';

function App() {
  
  const [apiData,setApiData]=useState(null);

  useEffect(()=>{
    axios.get("https://api.tvmaze.com/search/shows?q=all")
    .then((res)=>{
      setApiData(res.data);
    })
  },[])

  return (

      <SummaryProvider>
        <div>
          {apiData && <MovieApp apiData={apiData}/>}
        </div>
      </SummaryProvider>

    
    
  
  );
}

export default App;
