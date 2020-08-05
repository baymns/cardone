import React from 'react';
import { useDispatch } from 'react-redux';
import AvatarEditor from '../Avatar';
import styles from './foto.module.scss';
import { showModal } from '../../redux/actions/actionCreators';

const CropImage = ({
  imageSrc,
  onCrop,
  setEditorRef,
  scaleValue,
  onScaleChange,
  setUploadFoto,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.cropImage}>
      <AvatarEditor
        ref={setEditorRef}
        image={imageSrc}
        width={150}
        height={150}
        border={25}
        scale={scaleValue}
        borderRadius={50}
      />
      <input
        style={{ width: '50%' }}
        type="range"
        value={scaleValue}
        min="1"
        max="10"
        onChange={onScaleChange}
      />
      <button
        onClick={() => {
          dispatch(showModal());
          onCrop();
        }}
      >
        Сохранить фото
      </button>
      <button
        onClick={() => {
          dispatch(showModal());
          setUploadFoto(false);
        }}
      >
        Отменить
      </button>
    </div>
  );
};

export default CropImage;
