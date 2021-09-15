import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCountry } from '../../redux/countries/countries';

const Details = () => {
 const { name } = useParams();
 const dispatch = useDispatch();
 const { country, loading } = useSelector((state) => ({
   loading: state.loadingBar.default,
   country: state.countries.selected,
 }));