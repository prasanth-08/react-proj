
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Places() {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlaces();
  }, []);

  const getPlaces = async () => {
    try {
      const response = await axios.get(`https://tour-booking-tu7f.onrender.com/api/v1/tours`);
      if (response.data.success) {
        setPlaces(response.data.data);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          places.map((place) => (
            <div className="col-md-3">
              <Link to={`/places/${place._id}`}>
                <div className="card my-4">
                  <img src={place.photo} alt={place.title} />
                  <p className='pic'>Featured</p>
                  <div className="card-body">
                    <p className="card-text"><CiLocationOn id='color' /> {place.city}</p>
                    <h5 className="card-title">{place.title}</h5>
                    <p className="card-text">{place.desc}</p>
                    <div className='or'>
                      <p className="card-text"><span className='price'> ${place.price} </span>/per person</p>
                      <button className='book'>Book <br />now</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Places;


