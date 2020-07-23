import React from 'react';
import AvatarEditor from '../Avatar'
import styles from './foto.module.scss';

const CropImage = ({
  imageSrc,
  onCrop,
  setEditorRef,
  scaleValue,
  onScaleChange,
}) => {
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
      <button onClick={onCrop}>Сохранить фото</button>
    </div>
  );
};

export default CropImage;
