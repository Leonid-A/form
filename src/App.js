import { useEffect, useRef, useState } from "react";
import "./App.css";
import Contact from "./Contact";

function App() {
  const objName="customer";
  const deleteContactRow = (target) => {
    console.log(target);
  };

  const [customerObj, setCustomerObj] = useState(
    localStorage.getItem(objName) || { sections: [] }
  );

  const inputSection = useRef();

  const [createFieldObj, setCreateFieldObj]=useState({})
  const [contactRow, setContactRow] = useState([
    <Contact onClick={deleteContactRow} />,
  ]);

  const addInputField = (sectionName) => {
    const newCustomerObj = JSON.parse(JSON.stringify(customerObj));
    debugger
console.log(11111, newCustomerObj.sections);
    newCustomerObj.sections.map((section) => {
      if (section.name === sectionName) {
        section.fields.push({
          type: createFieldObj[sectionName].inputType,
          name: createFieldObj[sectionName].inputName,
        });
      }
    });
    debugger
    console.log(newCustomerObj)
    setCustomerObj(newCustomerObj);
    saveInLocalStorage(newCustomerObj)

  };

  const saveInLocalStorage = (customerObj) => {
    localStorage.setItem(objName, JSON.stringify(customerObj))
  }

  const addSection = () => {
    const newCustomerObj = JSON.parse(JSON.stringify(customerObj));

    newCustomerObj.sections.push({
      name: inputSection.current.value,
      fields: [],
    });
    setCustomerObj(newCustomerObj);
    saveInLocalStorage(newCustomerObj)
  };

  const addNewContact = () => {
    const addNewRow = [...contactRow, <Contact onClick={deleteContactRow} />];
    setContactRow(addNewRow);
  };

  const setCreateField = (sectionName, event) => {
    const dd = JSON.parse(JSON.stringify(createFieldObj))
    if (dd[sectionName]) {
      dd[sectionName][event.target.name] = event.target.value
    } else {
    dd[sectionName] = {
      [event.target.name]: event.target.value
    }
    }
    

    console.log(event, dd)
    setCreateFieldObj(dd)
  }


  return (
    <div className="App m-2">
      <h1>Customer</h1>
      <div className="form-group col-md-6 p-2 m-2 border rounded bg-light">
        <input type="text" ref={inputSection} placeholder="Section Name" />
        <button
          type="button"
          className="ml-2 btn btn-success"
          onClick={addSection}
        >
          + Section
        </button>
      </div>

      {customerObj.sections.map((section) => {
        return (
          <div key={section.name}>
            <h2>{section.name}</h2>
            <div >
              <input type="text" name="inputName"
               onChange={(event) => setCreateField(section.name, event)} placeholder="Field Name" />
              <select onChange={(event) => setCreateField(section.name, event)} name="inputType">
                <option></option>
                <option>text</option>
                <option>date</option>
                <option>number</option>
                <option>checkbox</option>
              </select>
              <button 
                type="button"
                className="btn btn-secondary"
                onClick={() => addInputField(section.name)}
              > Add</button>
            
            </div>
            {section.fields.map((field) => {
              return (
                <div className="form-group " key={field.name}>
                  <label htmlFor={field.name}>{field.name}</label>
                  <input
                    type={field.type}
                    className="form-control col-md-6"
                    id={field.name}
                  />
                </div>
              );
            })}
          </div>
        );
      })}

      {/* <div className="col-md-6 p-2 m-2 border rounded bg-light">
      <div>
        <input type="text" ref={inputName} placeholder="Field Name"/>
        <select ref={inputType}>
          <option>text</option>
          <option>date</option>
          <option>number</option>
          <option>checkbox</option>
        </select>
        <button
                type="button"
                className="btn btn-secondary"
                onClick={addInputField}
              >
                Add
              </button>
      </div>
              {fields.map(item => item)}
              <div className="form-group nameBlock">
          <label for="InputName">Name</label>
          <input
            type="text"
            className="form-control col-md-6"
            id="InputName"
            aria-describedby="nameHelp"
            placeholder="Full Name"
          />
          <small id="nameHelp" className="form-text">
            First and Last name
          </small>
        </div>
        <div className="form-group ageBlock">
          <label for="InputAge">Age</label>
          <input
            type="text"
            className="form-control col-md-1"
            id="InputAge"
          ></input>
        </div>
        <div className="form-group genderBlock">
          <label for="genderSelect">Gender</label>
          <select className="form-control col-md-2" id="genderSelect">
            <option></option>
            <option>male</option>
            <option>female</option>
          </select>
        </div>
        <div className="form-group birthdayBlock">
          <label for="chooseBirthday">Birthday</label>
          <input
            type="date"
            className="form-control col-md-4"
            id="chooseBirthday"
          ></input>
        </div>
        <div className="addressBlock">
          <h2>Address</h2>
          <div className="border rounded p-2">
            <div className="form-group countryBlock">
              <label for="inputCountry">Country</label>
              <input
                type="text"
                className="form-control col-md-4"
                id="inputCountry"
                placeholder="Country"
              ></input>
            </div>
            <div className="form-group cityBlock">
              <label for="inputCity">City</label>
              <input
                type="text"
                className="form-control col-md-4"
                id="inputCity"
                placeholder="City"
              ></input>
            </div>
            <div className="form-group zipBlock">
              <label for="inputZip">Zip code</label>
              <input
                type="text"
                className="form-control col-md-2"
                id="inputZip"
                placeholder="Zip code"
              ></input>
            </div>
          </div>
        </div>
        
      </div> */}
      {/* <div className="allContactsBlock">
          <h2>Contacts</h2>
          <div className="border rounded p-2 form-group contactsBlock">
            <table className="mb-2 border">
              <thead>
                <tr>
                  <th className="border p-1">type</th>
                  <th className="border p-1">value</th>
                  <th className="border p-1"></th>
                </tr>
              </thead>
              <tbody>{contactRow.map((item) => item)}</tbody>
            </table>
            <div className="btn-group buttonsBlock" role="group">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={addNewContact}
              >
                + Contact
              </button>
             
            </div>
          </div>
        </div> */}
    </div>
  );
}

export default App;

const customer = {
  sections: [
    {
      name: "Personal",
      fields: [
        {
          type: "text",
          name: "Full Name",
        },
        {
          type: "number",
          name: "Age",
        },
      ],
    },
    {
      name: "Address",
      fields: [
        {
          type: "text",
          name: "Country",
        },
      ],
    },
  ],
};
