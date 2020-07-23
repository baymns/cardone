import React, { useState ,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUserAvatar } from '../../redux/actions/userActionCreator';
import CropImage from './cropImage';

function FotoEditor({ userId, setUploadFoto }) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    userProfilePic: '',
    scaleValue: 1,
  });

  const [editor, setEditor] = useState(null);

  const setEditorRef = (editor) => {
    setEditor(editor);
  };

  function profileImageChange(fileChangeEvent) {
    const file = fileChangeEvent.target.files[0];
    const { type } = file;
    if (type.endsWith('jpeg') || type.endsWith('png') || type.endsWith('jpg')) {
      setState({ ...state, selectedImage: file });
    }
  }

  function onCrop() {
    if (editor != null) {
      const url = editor.getImageScaledToCanvas().toDataURL();
      dispatch(addUserAvatar(userId, String(url)));
      setState({ ...state, userProfilePic: url });
      setUploadFoto(false)
    }
  }

  function onScaleChange(scaleValueEvent) {
    const scaleValue = parseFloat(scaleValueEvent.target.value);
    setState({ ...state, scaleValue });
  }

  return (
    <>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={profileImageChange}
      />

      <CropImage
        imageSrc={state.selectedImage}
        setEditorRef={setEditorRef}
        onCrop={onCrop}
        scaleValue={state.scaleValue}
        onScaleChange={onScaleChange}
      />
    </>
  );
}

export default FotoEditor;
