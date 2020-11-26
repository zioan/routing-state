import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GetDataAxios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
  }, []);

  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.employee_name}</li>
        ))}
      </ul>
    </div>
  );
}
