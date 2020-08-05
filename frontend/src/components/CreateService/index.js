import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../../redux/actions/actionCreators';
import { useHistory } from 'react-router-dom';

const CreateService = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <div>Желаете зарегистрировать сервис в приложении?</div>
      <button onClick={() => dispatch(showModal('formCreateService'))}>
        ДА
      </button>

      <button onClick={() => history.goBack()}>НЕТ</button>
    </>
  );
};
export default CreateService;
