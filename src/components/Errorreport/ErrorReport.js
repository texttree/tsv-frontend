import React from "react";
import { SendToTSV } from "@texttree/tsv-frontend";


import {
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    TextField,
   
  } from '@material-ui/core';

function ErrorReport({
 reference

}) {



  const [openDialog, setOpenDialog] = React.useState(false);
  const [valueComment, setValueComment] = React.useState('');
  
  
  const [open, setOpen] = React.useState(false);


  const handleChange = (e) => {
    setValueComment(e.target.value);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  function handleClickOpen() {
    if (window.getSelection().toString()) {
      setOpenDialog(true);
      reference.textSelected = window.getSelection().toString();
    }
  }

  
    

    

  function handleCancel() {
    setOpenDialog(false);
  }


  return (
<>
    <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Error Report
      </Button>

      <Dialog open={openDialog}>
        <DialogTitle >Error Report</DialogTitle>
        <DialogContent>
          <DialogContentText>{reference.textSelected}</DialogContentText>
          
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="comment"
            label='Your_comment'
            type="text"
            value={valueComment}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions >
          <Button
            onClick={handleCancel}
            variant="contained"
            color="primary"

          >
            Cancel
          </Button>
          <Button
            onClick={SendToTSV({
              reference: { ...reference },
            })}
            variant="contained"
            color="secondary"

          >
            Send Message
          </Button>
         
        </DialogActions>
      </Dialog>
      <Dialog open={open} onClose={handleClose}>
        
        <DialogActions >
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

</>









  );
}
export default ErrorReport;