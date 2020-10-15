import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BackButton from "../mainLobbyPage/BackButton";

const CreatePage = () => {
  const history = useHistory();
  const [form,setForm] = useState({dormName : "" , roomType:"hee"})
  const handleChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value
    setForm((prev) => {
        return {...prev , [name] : value}
    })
  }
  const handleChangeSelect = (e : React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value
    setForm((prev) => {
        return {...prev , [name] : value}
    })
  }
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <>
      <BackButton handleGoBack={handleGoBack} />
      <br />
      <form onSubmit={(e : React.ChangeEvent<HTMLFormElement>)=> {
          e.preventDefault();
          alert(JSON.stringify(form))
      }}>
      <label>Dorm Name</label>
      <br />
      <input name="dormName" value={form.dormName} onChange={handleChangeInput} placeholder="Enter Dorm Name" />
      <br />
      <label>Room Type</label>
      <br />
      <select  value={form.roomType}  onChange={handleChangeSelect} name="roomType">
        <option value="hee">ห้อง ควย</option>
        <option value="kuy">ห้อง หี</option>
      </select>
      <br />
      <button type="submit">Create</button>
      <button onClick={handleGoBack}>Cancel</button>
      </form>
    </>
  );
};
export default CreatePage;
