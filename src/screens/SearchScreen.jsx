import { useNavigate, useParams } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import { getDogByName, getRandomDog } from '../api/dogs';
import { useState } from 'react';

const SearchScreen = () => {
  const navigate = useNavigate();
  const { dogName } = useParams();
  const [dog, setDog] = useState(null);
  const [inputValue, setInputValue] = useState(
    dogName
      ? dogName.charAt(0).toUpperCase() + dogName.slice(1).toLowerCase()
      : ''
  );

  const { fetchingError } = useFetchData(
    () => (dogName ? getDogByName(dogName) : getRandomDog()),
    [dogName],
    setDog
  );

  if (dogName && !dog && !fetchingError) {
    return <p>Loading dog details...</p>;
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/search/${inputValue.toLowerCase()}`);
  };

  return (
    <div className='container'>
      <div className='search-container'>
        <span>Type the breed you are looking for</span>
        <input
          value={inputValue}
          onChange={handleChange}
          type='text'
          placeholder='e.g. Beagle'
          className='search-input'
          required
        />
        <button className='search-button' onClick={handleSearch}>
          Search
        </button>
      </div>
      {!fetchingError && (
        <div className='image-container'>
          <img src={dog} alt={dogName} className='circle-image' />
        </div>
      )}
      {fetchingError && (
        <div className='text-container'>
          <p>Ajajaj! Tej rasy nie ma jesdzcze w naszej bazie. Poszukaj innej</p>
        </div>
      )}
      {!dogName && (
        <div className='text-container'>
          <p>Tu wyświetlimy informacje o interesującym Cię pupilu</p>
        </div>
      )}
      {dogName && !fetchingError && (
        <div className='text-container'>
          <h3>
            {dogName.charAt(0).toUpperCase() + dogName.slice(1).toLowerCase()}
          </h3>
          <p>
            Ten pies to wierny i przyjacielski czworonóg, który świetnie czuje
            się w roli rodzinnego towarzysza. Dobrze dogaduje się z dziećmi,
            uwielbia pieszczoty i wspólne zabawy. Jest łatwy w prowadzeniu, choć
            bywa uparty. Sprawdzi się zarówno w małym mieszkaniu jak i w domu z
            ogrodem. Wysokość w kłębie 30-35 cm, masa ciała 22-25 kg. Sierść
            krótka, delikatna, lśnica, umaszczenie płowe, pręgowane lub łaciate.
            Charakter czujny, śmiały, oddany, odważny, łagodny, czasem uparty. W
            zależności od dnia pokazuje różne oblicza swojej natury.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchScreen;
