import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {Data.map((item) => {
        return (
          <Link to={`/user/${item.id}`} className="card" key={item.id}>
            <div className="name">
              {item.first_name} {item.last_name}
            </div>
            <div className="email">{item.email}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default App;
