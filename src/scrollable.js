import React, { useState, useEffect } from 'react';

import axios from "axios";

const Scrollable = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    axios.get("https://randomuser.me/api/?results=50").then((res) => {
      // console.log(res.data.results)
      setData(res.data.results);
    });
  };

  // console.log(data);
  return (
    <div className="App">
      <div className="navbar">UserList</div>
      {data &&
        data.map((item) => {
          console.log(item);
          return (
            <div className="card" key={item.id.name}>
                <div style={{ display:"flex",flexDirection:"column"}}>
                 <p style={{ marginLeft: "20px" }}>
                   <img
                    src={item.picture.medium}
                    alt="err"
                    style={{ float: "right" }}
                   />
                  </p>
                  <p style={{ textAlign: "right" }}>
                    Address:<br/>{item.location.street.name},<br/>
                    {item.location.city},<br/>{item.location.country},<br/>{item.location.postcode}
                  </p>
                </div>
              <p style={{ marginLeft: "20px" }}>
                {item.name.title.concat(item.name.first).concat(item.name.last)}
              </p>
              <p style={{ margin: "20px 0 0 20px" }}>Email: {item.email}</p>
              <p style={{ marginRight: "20px" }}>Age: {item.dob.age}</p>
              <p style={{ margin: "20px"}}>Nationality: {item.nat}</p>
              <p style={{ margin: "20px"}}>#: {item.phone}</p>
             
              
            </div>
          );
        })}
    </div>
  );
};


export default Scrollable;
