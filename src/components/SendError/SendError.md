```jsx
import React, { useState } from "react";

import { Button, Dialog, DialogTitle } from "@material-ui/core";

import { SendError } from "@texttree/tsv-frontend";

const [openDialog, setOpenDialog] = useState(false);
const [answerSend, setAnswerSend] = useState({});
const handleClick = () => {
  const answer = SendError({
    reference: "2:1",
    bookId: "gen",
    resource: "rlob",
    serverLink: "https://tsv-backend.herokuapp.com/send",
    fields: {
      Quote: "test1",
      Comment: "test2",
    },
  });
  setOpenDialog(true);
  setAnswerSend(answer);
};
const handleClose = () => {
  setOpenDialog(false);
};
<>
  <Button variant="contained" onClick={handleClick}>
    Send Error
  </Button>
  <Dialog open={openDialog} onClose={handleClose}>
    <DialogTitle>{JSON.stringify(answerSend)}</DialogTitle>
  </Dialog>
</>;
```
