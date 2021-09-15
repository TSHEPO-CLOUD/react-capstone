import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../../redux/countries/countries';


const Home = () => {
 const continent = 'Europe';

 const dispatch = useDispatch();
 const { list, total, loading } = useSelector((state) => ({
   ...state.countries,
   loading: state.loadingBar.default,
 }));