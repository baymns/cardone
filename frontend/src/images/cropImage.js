import React, { useRef } from 'react';
import AvatarEditor from '../../src/components/Avatar'

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
        width={250}
        height={250}
        border={50}
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
