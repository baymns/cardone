import React from 'react';
import styles from './modal.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useTransition, animated, config } from 'react-spring';
import { showModal } from '../../redux/actions/actionCreators';

export const Modal = (props) => {
  const show = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();
  const transition = useTransition(show, null, {
    from: { opacity: 0, top: '-1000px' },
    enter: { opacity: 1, top: '0px' },
    leave: { opacity: 0, top: '-1000px' },
  });

  return (
    <div>
      {transition.map(({ item, key, props: springProps }) => {
        return (
          item && (
            <animated.div
              key={key}
              className={styles.container}
              style={springProps}
            >
              <div
                className={styles.modalBackground}
                onClick={() => dispatch(showModal())}
              ></div>
              <div className={styles.modal}>
                <button
                  className={styles.closeButton}
                  onClick={() => dispatch(showModal())}
                  type="button"
                  aria-label="Close"
                >&times;
                  {/* <span className={styles.buttonX} aria-hidden="true"></span> */}
                </button>
                {props.children}
              </div>
            </animated.div>
          )
        );
      })}
    </div>
  );
};
