import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../../redux/countries';
import Icon from '../Icon';
import formatNumber from '../../utils/formatNumber';
import './Home.css';
import virus from '../../assets/virus.svg';
import map from '../../assets/europe.png';

const Home = () => {
  const continent = 'Europe';

  const dispatch = useDispatch();
  const { list, total, loading } = useSelector((state) => ({
    ...state.countries,
    loading: state.loadingBar.default,
  }));

  useEffect(() => {
    if (!list.length) {
      dispatch(fetchCountries(continent));
    }
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <h1>
        {continent}
        {' '}
        -
        {' '}
        {total}
      </h1>
      <ul>
        {list.map(({ country, confirmed }) => (
          <li key={country}>
            <Link to={`/country/${country}`}>
              {country}
              {' '}
              -
              {' '}
              {confirmed}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
