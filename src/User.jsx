import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function User() {
  var { id } = useParams();
  const [Userdata, setUserdata] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/" + --id)
      .then((res) => setUserdata(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="App">
      <img src={Userdata.avatar} alt="" />
      <div className="id">
        <b>ID:</b> {Userdata.id}
      </div>
      <div className="name">
        <b>Name:</b> {Userdata.first_name} {Userdata.last_name}
      </div>
      <div className="email">
        <b>Email:</b> {Userdata.email}
      </div>
    </div>
  );
}

export default User;
