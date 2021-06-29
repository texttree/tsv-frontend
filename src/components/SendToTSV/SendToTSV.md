```jsx
import React, { useState } from 'react';

import { Button, Dialog, DialogTitle, CircularProgress } from '@material-ui/core';

import { SendToTSV } from '@texttree/user-notes-rcl';

const [openDialog, setOpenDialog] = useState(false);
const [result, setResult] = useState(false);
const [answerSend, setAnswerSend] = useState({});
const handleClick = () => {
  setOpenDialog(true);
  setResult(false);
  SendToTSV({
    reference: '2:1',
    bookId: 'gen',
    resource: 'rlob',
    serverLink: 'https://tsv-backend.herokuapp.com/send',
    type: 'err',
    fields: { Note: 'note', Quote: 'quote' },
  })
    .then((res) => {
      console.log('res', res);
      setResult(true);
      setAnswerSend(res);
    })
    .catch((err) => {
      console.log('err', err);
      setResult(true);
      setAnswerSend(err);
    });
};
const handleClose = () => {
  setOpenDialog(false);
};
<>
  <Button variant="contained" onClick={handleClick}>
    Send to TSV file
  </Button>
  <Dialog open={openDialog} onClose={handleClose}>
    <DialogTitle>
      {result ? JSON.stringify(answerSend) : <CircularProgress color="inherit" />}
    </DialogTitle>
  </Dialog>
</>;
```
