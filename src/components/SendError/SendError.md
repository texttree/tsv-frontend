```jsx
import React, { useState } from "react";

import { Button, Dialog, DialogTitle } from "@material-ui/core";

import { SendError } from "@texttree/tsv-frontend";

const [openDialog, setOpenDialog] = useState(false);
const [answerSend, setAnswerSend] = useState({});
const handleclick = () => {
  const answer = SendError({
    reference: "2:1",
    bookId: "gen",
    resource: "rlob",
    serverLink: "https://lit-falls-48214.herokuapp.com/send-to-file",
    fields: {
      quote: "test1",
      comment: "test2",
    },
  });
  setOpenDialog(true);
  setAnswerSend(answer);
};
const handleClose = () => {
  setOpenDialog(false);
};
<>
  <Button variant="contained" onClick={handleclick}>
    Send Error
  </Button>
  <Dialog open={openDialog} onClose={handleClose}>
    <DialogTitle>{answerSend.message}</DialogTitle>
  </Dialog>
</>;
```
