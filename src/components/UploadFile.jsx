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
        {/* <UploadFiles /> */}
      </Dialog>
    </div>
  );
}
