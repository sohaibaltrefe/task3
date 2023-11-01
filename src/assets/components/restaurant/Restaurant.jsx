import React, { useEffect, useState } from 'react';

function Restaurant() {
  const [pizzaRestaurants, setPizzaRestaurants] = useState([]);
  const [saladRestaurants, setSaladRestaurants] = useState([]);
  const [onionRestaurants, setOnionRestaurants] = useState([]);

  const fetchRestaurants = async (searchTerm, setState) => {
   
      const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchTerm}`);
      
        const data = await response.json();
        setState(data.recipes);
     
      
   
  }

  useEffect(() => {
    fetchRestaurants('Pizza', setPizzaRestaurants);
    fetchRestaurants('Salad', setSaladRestaurants);
    fetchRestaurants('Onion', setOnionRestaurants);
  }, []);

  return (
    <>
      <h1 className=' text-center my-5'>Restaurants</h1>
      <div>
        <h2 className=' text-center  bg-info-subtle  my-4'>Pizza</h2>
        <div className='row'>
          {pizzaRestaurants.map((restaurant) => (
            <div className='col-md-4 ' key={restaurant.recipe_id}>
              <h3 style={{ fontSize: '14px' }}>{restaurant.title}</h3>
              <img src={restaurant.image_url} alt={restaurant.title} className='w-50 h-50' />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className=' text-center  bg-danger  my-4'>Salad</h2>
        <div className='row'>
          {saladRestaurants.map((restaurant) => (
            <div className='col-md-4 ' key={restaurant.recipe_id}>
              <h3  style={{ fontSize: '14px' }}>{restaurant.title}</h3>
              <img src={restaurant.image_url} alt={restaurant.title} className='w-50 h-50' />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className=' text-center bg-success   my-4'>Onion</h2>
        <div className='row'>
          {onionRestaurants.map((restaurant) => (
            <div className='col-md-4 ' key={restaurant.recipe_id}>
              <h3 style={{ fontSize: '14px' }}>{restaurant.title}</h3>
              <img src={restaurant.image_url} alt={restaurant.title} className='w-50 h-50' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Restaurant;
