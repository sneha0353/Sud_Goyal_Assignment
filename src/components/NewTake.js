import React, { useState,useEffect } from "react";
import NewInput from "./NewInput";
import axios from "axios"

function NewTake() {
  const [validate, setValidate] = useState(true);
  const [vals,setVals]=useState([]);
  const [sel,setSel]=useState();
  const [allVal,setAllVal]=useState()

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(data=>setVals(data.data))
    .catch(err=>console.log(err))
  },[])

  const handleChange=e=>{
    setSel(e.target.value)
    if(e.target.value)
    {
        axios.get(`https://jsonplaceholder.typicode.com/users/${e.target.value}`)
        .then(data=>setAllVal(data.data))
        .catch(err=>console.log(err))
    }
  }

  return (
    <div className="row">
    <h1 id="form-test"
    style={{color:"blue",fontSize:"60px",fontWeight:"bold"}}
    >FORM VALIDATION</h1>
        <label for="validationCustom04" 
        name="sel"
        className="form-label">
          State
        </label>
        <select
          autoFocus={true}
          //onBlur={() => setValidate(true)}
          onChange={(e) => handleChange(e)}
          className="form-select"
          id="validationCustom04"
          required
        >
          <option selected disabled value="">
            Choose...
          </option>
          {vals ? 
          vals.map(data=>(
              <option 
              id="op"
              value={data.id}>{data.name}</option>
          ))
          :
          <div></div>
          }
        </select>
        <NewInput allVal={allVal ? allVal : ""} />
    </div>
  );
}

export default NewTake;
