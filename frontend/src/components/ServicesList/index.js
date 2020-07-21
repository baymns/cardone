import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load } from '../../redux/actions/actionCreators';
import Service from '../Service';
import Loading from '../Loading';
import styles from './serviceslist.module.scss';

function ServicesList({ category }) {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.services.loading);
  const data = useSelector((state) => state.services.data);
  const error = useSelector((state) => state.services.error);

  useEffect(() => {
    dispatch(load(category));
  }, [dispatch]);
  console.log(data);
  return (
    <div className="page_container">
      <div className="sort">
        
      </div>
      <div className={styles.list_container}>
        {loading && <Loading />}
        {error && error.message}
        {data &&
          data.map((service) => (
            <Service key={service.id} service={service} />
          ))}
      </div>
    </div>
  );
}

export default ServicesList;
