import React, { useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load } from '../../redux/actions/actionCreators';
import Service from '../Service';

function ServicesList(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.err);

  useEffect(() => {
    dispatch(load());
  }, [dispatch]);

  return <Service />;
}

export default ServicesList;
