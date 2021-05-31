```jsx
import React, { useState } from "react";

import { Button, Dialog, DialogTitle } from "@material-ui/core";

import { SendToTSV } from "@texttree/tsv-frontend";

const [openDialog, setOpenDialog] = useState(false);
const [answerSend, setAnswerSend] = useState({});
const handleClick = () => {
  const answer = SendToTSV({
    reference: "2:1",
    bookId: "gen",
    resource: "rlob",
    serverLink: "https://lit-falls-48214.herokuapp.com/send-to-file",
    type: "err",
    fields: {note: 'note', quote: 'quote'},
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
