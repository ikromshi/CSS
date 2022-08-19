// https://randomuser.me/api
import { useState } from "react";
import { useEffect } from "react";


const FetchData = () => {

const [data, setData] = useState(null);

// useEffect(() => {
//   return async () => {
//     const rawData = await fetch("");
//     const data = await rawData.json();
//     console.log(data);


//   };
// });



  return (
    <div>
      {data}
    </div>
  );
};

export default FetchData;