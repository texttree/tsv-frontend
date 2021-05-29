ObjToTsv

```jsx
import React from "react";
import Button from "@material-ui/core/Button";
import { SendToTSV } from "@texttree/tsv-frontend";

<Button
  variant="contained"
  onClick={SendToTSV({
    reference: "1:1",
    bookId: "gen",
    resource: "rlob",
    type: "err",
    // fields: {
    //   quote: "Good Father",
    //   comment: "I think",
    // },
  })}
>
  Send
</Button>;
```
