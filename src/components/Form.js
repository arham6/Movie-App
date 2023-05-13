import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { FormContext } from '../context/FormProvider'

export default function Form() {

    const [currentData, setCurrentData] = useState({
        firstname: "",
        lastname: "",
        email: ""
      });
      const [formValues, setFormValues] = useState([]);
      
      //STORING USER DATA IN LOCAL STORAGE
      useEffect(() => {
        localStorage.setItem("formValues", JSON.stringify(formValues));
      }, [formValues]);

    const {formDirect}=useContext(FormContext)

    function handleFormSubmit(e){
        e.preventDefault();
        setFormValues((prevFormValues) => [...prevFormValues, currentData]);
    }

  return (
    <div className='formMainDiv'>
        
        <h1>Book Tickets for - {formDirect.toUpperCase()}</h1>

        <form>

            <div className="insideForm row">
                <div className="col">
                    <input value={currentData.firstname} onChange={(e) =>
                setCurrentData({ ...currentData, firstname: e.target.value })
            } type="text" className="form-control" placeholder="First name"/>
                </div>

                <div className="col">
                    <input value={currentData.lastname} onChange={(e) =>
                setCurrentData({ ...currentData, lastname: e.target.value })
            } type="text" className="form-control" placeholder="Last name"/>
                </div>
            </div>

            <div className="insideForm form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input value={currentData.email} onChange={(e) =>
            setCurrentData({ ...currentData, email: e.target.value })
          } type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>

            <div className="insideForm form-group">
                <label htmlFor="exampleFormControlSelect1">Number of tickets:</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="insideForm form-group">
                <label htmlFor="exampleFormControlTextarea1">Referral code:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>

            <button onClick={handleFormSubmit} type="submit" className="formBtn btn btn-primary">Confirm Booking</button>

        </form>
    </div>
  )
} 
