import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllDogs } from '../api/dogs';
import useFetchData from '../hooks/useFetchData';

const HomeScreen = () => {
  const [dogs, setDogs] = useState([]);

  const { fetchingError } = useFetchData(getAllDogs, [], setDogs);

  if (fetchingError) {
    return <p>{fetchingError}</p>;
  }

  if (!dogs) {
    return <div>Loading...</div>;
  }

  const sortedDogs = Object.keys(dogs).sort();

  const listDogs = sortedDogs.map((key, index) => (
    <li key={index}>
      <Link to={`/search/${key}`}>
        {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
      </Link>
    </li>
  ));

  return (
    <div>
      <h2>List of breeds:</h2>
      <ul className='list-dogs'>{listDogs}</ul>
    </div>
  );
};

export default HomeScreen;
