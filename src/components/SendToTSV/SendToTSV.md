```jsx
import React, { useState } from 'react';

import { Button, Dialog, DialogTitle } from '@material-ui/core';

import { SendToTSV } from '@texttree/tsv-frontend';

const [openDialog, setOpenDialog] = useState(false);
const [answerSend, setAnswerSend] = useState({});
const handleClick = () => {
  const answer = SendToTSV({
    reference: '2:1',
    bookId: 'gen',
    resource: 'rlob',
    serverLink: 'https://tsv-backend.herokuapp.com/send',
    type: 'err',
    fields: { Note: 'note', Quote: 'quote' },
  });
  setOpenDialog(true);
  setAnswerSend(answer);
};
const handleClose = () => {
  setOpenDialog(false);
};
<>
  <Button variant="contained" onClick={handleClick}>
    Send to TSV file
  </Button>
  <Dialog open={openDialog} onClose={handleClose}>
    <DialogTitle>{JSON.stringify(answerSend)}</DialogTitle>
  </Dialog>
</>;
```
