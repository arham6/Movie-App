import { useContext } from 'react';
import { SummaryContext } from '../context/SummaryProvider';

export default function Movie(props) {
  const {setButtonClick}=useContext(SummaryContext)
  
  function handleOnClick(){
    setButtonClick({summary:props.summary,name:props.title});
  }
  return (
    <div className="card" style={{width:"16.4rem"}}>
      <img src={props.image?props.image.medium:"https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg"} className="card-img-top" alt="p"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Type: {props.type}</p>
        <p className="card-text">Language: {props.language}</p>
        <p className="card-text">Runtime: {props.runtime?props.runtime:"-"}</p>
        <button onClick={handleOnClick} className="allSummaryBtns btn btn-primary">Summary</button>
      </div>
    </div>
  )
}
