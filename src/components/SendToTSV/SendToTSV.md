```jsx
import React from "react";

import Button from "@material-ui/core/Button";

import { SendToTSV } from "@texttree/tsv-frontend";

const handleclick = () => {
  SendToTSV({
    reference: "2:1",
    bookId: "gen",
    resource: "rlob",
    serverLink: "https://lit-falls-48214.herokuapp.com/send-to-file",
    type: "err",
  });
};
<Button variant="contained" onClick={handleclick}>
  Send to TSV file
</Button>;
```
