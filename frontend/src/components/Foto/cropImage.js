import React from 'react';
import AvatarEditor from '../Avatar'

const CropImage = ({
  imageSrc,
  onCrop,
  setEditorRef,
  scaleValue,
  onScaleChange,
}) => {
  return (
    <>
      <AvatarEditor
        ref={setEditorRef}
        image={imageSrc}
        width={150}
        height={150}
        border={25}
        scale={scaleValue}
      />
      <input
        style={{ width: '50%' }}
        type="range"
        value={scaleValue}
        min="1"
        max="10"
        onChange={onScaleChange}
      />
      <button onClick={onCrop}>Crop it</button>
    </>
  );
};

export default CropImage;
