import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load, sortDistance, sortRating, sortReview } from '../../redux/actions/actionCreators';
import Service from '../Service';
import Loading from '../Loading';
import styles from './serviceslist.module.scss';

function ServicesList({ category }) {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.services.loading);
  const sort = useSelector(state => state.services.sort);
  const data = useSelector((state) => state.services.data);
  useEffect(() => {
    dispatch(load(category));
  }, [dispatch]);
  const sortedData = useMemo(() => {
    if (sort === 'rating') {
      return data && data.slice().sort((a, b) => b.totalRating - a.totalRating)
    } else if (sort === 'review') {
      return data && data.slice().sort((a, b) => b.reviews.length - a.reviews.length)
    } else {
      return data && data.slice().sort((a, b) => a.distance - b.distance)
    };
  }, [data, sort])
  const error = useSelector((state) => state.services.error);
 
  return (
    <div className="page_container">
      <div className="sort">

      </div>
      <div className={styles.list_container}>
        <div className={styles.sort_block}>
          <p>Сортировать по:</p>
          <div className={styles.sort_btns}>
            <button type="button" className={(!sort || sort === 'distance') && styles.active} onClick={(e) => {
              dispatch(sortDistance());
              e.target.classList.toggle('active')
            }}>расстоянию</button>
            <button type="button" className={(sort === 'rating') && styles.active} onClick={() => dispatch(sortRating())}>рейтингу</button>
            <button type="button" className={(sort === 'review') && styles.active} onClick={() => dispatch(sortReview())}>отзывам</button>
          </div>
        </div>
        {loading && <Loading />}
        {error && error.message}
        {sortedData &&
          sortedData.map((service) => (
            <Service key={service.id} categ={category} service={service} />
          ))}
      </div>
    </div>
  );
}

export default ServicesList;
