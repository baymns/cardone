import React, { useState, useRef } from 'react';
import CropImage from '../../images/cropImage';

// class FotoEditor extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.state = {
//       userProfilePic: '',
//       editor: null,
//       scaleValue: 1,
//     };
//   }

//   setEditorRef = (editor) => {
//     console.log('setEditorRef',editor)
//     return this.setState({ editor })
//   };

//   profileImageChange = (fileChangeEvent) => {
//     const file = fileChangeEvent.target.files[0];
//     console.log(file,'profileImageChange');
//     const { type } = file;
//     if (type.endsWith('jpeg') || type.endsWith('png') || type.endsWith('jpg')) {
//       this.setState({ selectedImage: file });
//     }
//   };

//   onCrop = () => {
//     const { editor } = this.state;
//     console.log(editor,'oncropeditor');
//     if (editor != null) {
//       const url = editor.getImageScaledToCanvas().toDataURL();
//       console.log(url,'editor!=null');
//       this.setState({ userProfilePic: url });
//     }
//   };

//   onScaleChange = (scaleValueEvent) => {
//     const scaleValue = parseFloat(scaleValueEvent.target.value);
//     console.log('onscale',scaleValue);
//     this.setState({ scaleValue });
//   };

//   render() {
//     return (
//       <>
//         <input
//           type="file"
//           accept="image/png, image/jpeg"
//           onChange={this.profileImageChange}
//         />

//         <CropImage
//           imageSrc={this.state.selectedImage}
//           setEditorRef={this.setEditorRef}
//           onCrop={this.onCrop}
//           scaleValue={this.state.scaleValue}
//           onScaleChange={this.onScaleChange}
//         />
//         <img src={this.state.userProfilePic} />
//       </>
//     );
//   }
// }

// function FotoEditor() {

//   const [userProfilePic, setUserProfilePic] = useState('');
//   const [editor, setEditor] = useState(null);
//   const [scaleValue, setScaleValue] = useState(1);
//   const [file1, setFile] = useState('');
//   const [selectedImage,setSelectedImage] = useState('')
//   //const setEditorRef = (editor) => setEditor(editor );

//   const profileImageChange = (fileChangeEvent) => {
//     console.log('profileImage');
//     const file = fileChangeEvent.target.files[0];
//     console.log(file,'profile');
//     const { type } = file;
//     if (type.endsWith('jpeg') || type.endsWith('png') || type.endsWith('jpg')) {
//       setFile(file);
//     }
//   };

//   const onCrop = () => {
//     //const { editor } = state;
//     console.log('oncrop');
//     if (editor != null) {
//       const url = editor.getImageScaledToCanvas().toDataURL();
//       console.log(url);
//       setUserProfilePic({ userProfilePic: url });
//     }
//   };

//   const onScaleChange = (scaleValueEvent) => {
//     console.log('onscale');
//     const scaleValue = parseFloat(scaleValueEvent.target.value);
//     setScaleValue({ scaleValue });
//   };

//   return (
//     <>
//       <input
//         type="file"
//         accept="image/png, image/jpeg"
//         onChange={profileImageChange}
//       />

//       <CropImage
//         imageSrc={selectedImage}
//         setEditorRef={setEditorRef}
//         onCrop={onCrop}
//         scaleValue={scaleValue}
//         onScaleChange={onScaleChange}
//       />
//       <img src={userProfilePic} />
//     </>
//   );
// }

function FotoEditor() {
  const [state, setState] = useState({
    userProfilePic: '',
    editor:null,
    scaleValue: 1,
  });
  const setEditorRef = useRef((editor) => setState({ editor }));
  

  function profileImageChange(fileChangeEvent) {
    const file = fileChangeEvent.target.files[0];
    const { type } = file;
    if (type.endsWith('jpeg') || type.endsWith('png') || type.endsWith('jpg')) {
      setState({ ...state, selectedImage: file });
    }
  }

  function onCrop() {
    console.log(state);
    const { editor } = state;
    if (editor != null) {
      const url = editor.getImageScaledToCanvas().toDataURL();
      console.log(url);
      setState({ ...state, userProfilePic: url });
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
      <img src={state.userProfilePic} />
    </>
  );
}

export default FotoEditor;
