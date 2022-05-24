import React, { useState, useEffect } from "react";
import NewInput from "./NewInput";
import axios from "axios";

function InputTake() {
  const [validate, setValidate] = useState(true);
  const [vals, setVals] = useState([]);
  const [sel, setSel] = useState();
  const [allVal, setAllVal] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => setVals(data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSel(e.target.value);
    if (e.target.value) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${e.target.value}`)
        .then((data) => setAllVal(data.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <div className="col-2"></div>
      {sel ? (
        <div className="col-8 container mt-4 mb-4">
          <h1
            id="hey1"
            style={{ color: "blue", fontSize: "60px", fontWeight: "bold" }}
          >
            FORM VALIDATION
          </h1>
          <form>
            <label for="validationCustom040" className="form-label">
              State
            </label>
            <select
              onChange={(e) => handleChange(e)}
              className="form-select"
              id="validationCustom0004"
              required
            >
              {vals ? (
                vals.map((data) => (
                  <option value={data.name}>{data.name}</option>
                ))
              ) : (
                <div></div>
              )}
            </select>
            {!sel ? <div>Please select a valid state.</div> : <div></div>}

            <NewInput
              allVal={allVal}
              setSel={setSel}
              setValidate={setValidate}
            />
          </form>
        </div>
      ) : (
        <div
          className="col-8"
          style={{
            minWidth: "40rem",
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1
            id="form-test"
            style={{ color: "blue", fontSize: "60px", fontWeight: "bold" }}
          >
            FORM VALIDATION
          </h1>
          <form className="form">
            <label for="validationCustom04" name="sel" className="form-label">
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
              {vals ? (
                vals.map((data) => (
                  <option id="op" value={data.id}>
                    {data.name}
                  </option>
                ))
              ) : (
                <div></div>
              )}
            </select>
            {!sel ? (
              <div>Please select a valid state.</div>
            ) : (
              <div>
                <NewInput
                //allVal={allVal}
                />
              </div>
            )}
          </form>
        </div>
      )}
      <div className="col-2"></div>
    </div>
  );
}

export default InputTake;
