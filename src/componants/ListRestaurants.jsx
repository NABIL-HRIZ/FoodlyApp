import React, { useEffect, useState } from 'react';

const ListRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554';
//       const options = {
//         method: 'GET',
//         headers: {
//           'x-rapidapi-key': '38176af0b8msh3c09d796c566276p1ddb18jsn4545ae4663b7',
//           'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await fetch(url, options);
//         const result = await response.json(); // parse JSON, not text
//         console.log("API result:", result);
//        setRestaurants(result.data.data || []);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchRestaurants();
//   }, []); // run once when component mounts

  return (
    <div>
      <h1>Restaurants</h1>
      {/* <ul>
        {restaurants.map((r, index) => (
          <li key={index}>{r.name}</li> // adjust based on real API fields
        ))}
      </ul> */}
    </div>
  );
};

export default ListRestaurants;
