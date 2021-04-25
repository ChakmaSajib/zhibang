import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import UploadFiles from './UploadFiles';

export default function UploadFile(props) {
  const { onClose, selectedValue, open } = props;
  const [value, onChange] = useState(new Date());

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleClick = (event) => {
    let idOfClickedIcon = event.currentTarget.id;
    console.log(idOfClickedIcon);
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='simple-dialog-title'
        open={open}
      >
        <UploadFiles />
      </Dialog>
    </div>
  );
}

// import './App.css';

// function App() {
//   const { register, handleSubmit } = useForm()

//   const onSubmit = async (data) => {
//     const formData = new FormData()
//     formData.append("picture", data.picture[0])

//     const res = await fetch("http://localhost:4000/picture", {
//       method: "POST",
//       body: formData
//     }).then(res => res.json())
//     alert(JSON.stringify(res))
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input ref={register} type="file" name="picture" />
//       <button>Submit</button>
//     </form>
//   );
// }
