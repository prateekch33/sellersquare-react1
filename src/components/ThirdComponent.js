import React, { useEffect, useState } from "react";
import Fields from "./Fields";

function ThirdComponent() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch(`https://sellersquare-nodejs2.vercel.app/readdata`, {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 0) {
          setResult(data.data);
        } else {
          alert(data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="show-details">
        <span>
          Fetches Data From the NodeJs CRUD API that I have submitted. <a href="https://sellersquare-nodejs2.vercel.app/">https://sellersquare-nodejs2.vercel.app/</a>
        </span>
        <div className="fields heading">
          <div className="field">Name</div>
          <div className="field">Email</div>
        </div>
        {result.map((e) => {
          return <Fields key={e.id} name={e.name} email={e.email} />;
        })}
      </div>
    </>
  );
}

export default ThirdComponent;
