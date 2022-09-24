import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Name from "./components/Name/Name";
import "./App.css";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
const [surname, setSurname]= useState("");
  const [username, setUsername] = useState("");
  const [filteredList, setFilteredList] = useState("");

  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "AddName",
      payload: [username," ", surname], 
    });
    setUsername("");
    setSurname("");
  };

  return (
    <div className="App">
    <div className="inputandlist">
      <form  className="formcontact" onSubmit={(e) => handleOnSubmit(e)}>
        <label htmlFor="Name"> Username </label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> <label htmlFor="Name"> surname </label>
             <input
          id="username"
          name="username"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      
        <button className="button_add" type="submit"> ADD </button>
      </form>
   
      <div className="contactList">
        {state.names.filter((item) => item.toLowerCase().includes(filteredList)).map((item, index) => (
          <Name id={index} text={item} key={index} filteredList={filteredList} />
        ))}
      </div></div>
      <div>
      <input
            className="filterInput"
            placeholder="filter by name/surname..."
            onChange={(event) => {
              setFilteredList(event.target.value);
            }}
          ></input></div>
    </div>
  );
}

export default App;
