import React, { useState} from "react";
import axios from "axios";
import Geo from "./geo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewInput(props) {
  const [title, setTitle] = useState("fcgh");
  const [body, setBody] = useState("fcgh");
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  //const titleRef=useRef(null)
  //const bodyRef=useRef(null)

  const handleSubmit = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        const val = data.data.length;
        if (val > 0) {
          const id = val + 1;
          axios
            .post("https://jsonplaceholder.typicode.com/posts", {
              id: id,
              userId: props.allVal.id,
              title: title,
              body: body,
            })
            .then((data) => {
              setFlag(true);
              toast.success("successful", { autoClose: 3000 });
              setTimeout(() => {
                setLoading(false);
                props.setValidate(true);
                props.setSel("");
              }, 3000);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  const Loader = () => {
    return (
      <div className="spinner-border text-light" role="status">
        <span className="sr-only"> </span>
      </div>
    );
  };

  return (
    <div>
      <div className="row g-3 mt-1">
        <ToastContainer id="hello" />
        <h5 id="suc">successful</h5>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Name :
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Name"
            value={props.allVal ? props.allVal.name : ""}
          />
        </div>
        <div className="col-6">
          <label htmlFor="inputAddress" className="form-label">
            Id :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Id"
            value={props.allVal ? props.allVal.id : ""}
          />
        </div>
        <div className="col-6">
          <label htmlFor="inputAddress" className="form-label">
            Username :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={props.allVal ? props.allVal.username : ""}
          />
        </div>
        <label for="inputAddress" className="form-label mb-1">
          Address
        </label>
        <div className="col-6">
          <label for="inputAddress" className="form-label">
            Street :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Street"
            value={props.allVal ? props.allVal.address.street : ""}
          />
        </div>
        <div class="col-6">
          <label for="inputAddress" className="form-label">
            Suite :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Suite"
            value={props.allVal ? props.allVal.address.suite : ""}
          />
        </div>
        <div className="col-6 mt-1">
          <label for="inputAddress" className="form-label">
            City :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="City"
            value={props.allVal ? props.allVal.address.city : ""}
          />
        </div>
        <div className="col-6 mt-1">
          <label for="inputAddress" className="form-label">
            Zipcode :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Zipcode"
            value={props.allVal ? props.allVal.address.zipcode : ""}
          />
        </div>

        <label for="inputAddress" className="form-label mt-4 mb-1">
          Contact Details
        </label>
        <div className="col-6">
          <label for="inputAddress" className="form-label">
            Phone :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            value={props.allVal ? props.allVal.phone : ""}
          />
        </div>
        <div className="col-6">
          <label for="inputAddress" className="form-label">
            Website :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Website"
            value={props.allVal ? props.allVal.website : ""}
          />
        </div>
        <label for="inputAddress" className="form-label mb-1">
          Company
        </label>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Name :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={props.allVal ? props.allVal.company.name : ""}
          />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            CatchPhrase :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Catch Phrase"
            value={props.allVal ? props.allVal.company.catchPhrase : ""}
          />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Bs :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="BS"
            value={props.allVal ? props.allVal.company.bs : ""}
          />
        </div>
        <div className="col-12">
          <Geo value={props.allVal ? props.allVal : ""} />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Title :
          </label>
          <input
            //ref={titleRef}
            type="text"
            className="form-control"
            id="inputAddress222"
            placeholder="Title"
            onChange={(e)=>setTitle(e.target.value)}
            // onChange={onChangeInput}
            // onInput={(e) => {
            //   console.log(e.target.value);
            //   setTitle(e.target.value);
            // }}
          />
          {title ? <div></div> : <div>Please enter title.</div>}
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Body :
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress333"
            placeholder="Body"
            //ref={bodyRef}
            onChange={(e) => setBody(e.target.value)}
          />
          {body ? <div></div> : <div>Please enter body.</div>}
        </div>
        {title && body ? (
          <button
            type="button"
            id="submitButton"
            onClick={handleSubmit}
            className="btn btn-lg btn-secondary"
          >
            {loading ? <Loader /> : "Submit"}
          </button>
        ) : (
          <button type="button" className="btn btn-lg btn-secondary" disabled>
            Submit
          </button>
        )}
        {flag && <div id="submitted">Success</div>}
      </div>
    </div>
  );
}

export default NewInput;
