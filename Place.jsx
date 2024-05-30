import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Place() {
  const [place, setPlace] = useState({}); // Use an empty object for initial state
  const { id } = useParams();

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await fetch(`https://tour-booking-tu7f.onrender.com/api/v1/tours/${id}`);
        const res = await data.json();
        setPlace(res);
      } catch (error) {
        console.error("Error fetching place data:", error);
        // Handle the error gracefully, e.g., display an error message to the user
      }
    };

    getdata();
  }, [id]); // Dependency array includes `id`

  return (
    <>
      {Object.keys(place).length > 0 ? ( // Check for non-empty object
        <div className="card my-4">
          <img src={place.photo} alt={place.title} />
          <p className="pic">Featured</p>
          <div className="card-body">
            <p className="card-text">{place.city}</p>
            <h5 className="card-title">{place.title}</h5>
            <p className="card-text">{place.desc}</p>
            <div className="or">
              <p className="card-text">
                <span className="price">${place.price}</span>/per person
              </p>
              <button className="book">Book Now</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Place;
