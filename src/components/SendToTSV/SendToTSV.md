```jsx
import React, { useState } from "react";

import { Button, Dialog, DialogTitle } from "@material-ui/core";

import { SendToTSV } from "@texttree/tsv-frontend";

const [openDialog, setOpenDialog] = useState(false);
const [answerSend, setAnswerSend] = useState({});
const handleclick = () => {
  const answer = SendToTSV({
    reference: "2:1",
    bookId: "gen",
    resource: "rlob",
    serverLink: "https://lit-falls-48214.herokuapp.com/send-to-file",
    type: "err",
  });
  setOpenDialog(true);
  setAnswerSend(answer);
};
<>
  <Button variant="contained" onClick={handleclick}>
    Send to TSV file
  </Button>
  <Dialog open={openDialog}>
    <DialogTitle>{answerSend.message}</DialogTitle>
  </Dialog>
</>;
```
