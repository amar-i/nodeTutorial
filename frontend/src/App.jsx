import "./App.css";
import { useEffect, useState } from "react";
import API from "./API/api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/customers")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Customers</h1>
      <div className="container">
        {data.map((customer) => (
          <div key={customer._id} className="profile-tile">
            <h1>{customer.name}</h1>
            <hr />
            <p>
              <b>Email: </b>
              {customer.email}
            </p>
            <p>
              <b>Industry: </b>
              {customer.industry}
            </p>
            <p>
              <b>Age: </b>
              {customer.age}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
