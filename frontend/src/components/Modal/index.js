import React from 'react';
import styleSheet from './modal.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useTransition, animated, config } from 'react-spring';
import { showModal } from '../../redux/actions/actionCreators';
import Evacuator from '../Evacuator';

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
              className={styleSheet.container}
              style={springProps}
            >
              <div
                className={styleSheet.modalBackground}
                onClick={() => dispatch(showModal())}
              ></div>
              <button onClick={() => dispatch(showModal())}>Закрыть</button>
              <div className={styleSheet.modal}>{props.children}</div>
            </animated.div>
          )
        );
      })}
    </div>
  );
};
