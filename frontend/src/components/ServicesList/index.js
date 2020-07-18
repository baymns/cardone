import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load } from '../../redux/actions/actionCreators';
import Service from '../Service';
import Loading from '../Loading';

function ServicesList(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.services.loading);
  const data = useSelector((state) => state.services.data);
  const error = useSelector((state) => state.services.error);

  useEffect(() => {
    dispatch(load());
  }, [dispatch]);

  return (
    <div >
      {loading && <Loading />}
      {error && error.message}
      {data &&
        data.map((service) => <Service key={service.CompanyMetaData.id} service={service} />)}
    </div>
  );
}

export default ServicesList;
