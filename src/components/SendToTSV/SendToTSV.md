ObjToTsv

```jsx
import React from "react";
import Button from "@material-ui/core/Button";
import { SendToTSV } from "@texttree/tsv-frontend";
const reference = {
  resource: "rob",
  bookId: "gen",
  chapter: "1",
  verse: "2",
  serverLink: "https://lit-falls-48214.herokuapp.com/send-to-file",
  textSelected: "Word",
  comment: "test",
};

<Button
  variant="contained"
  onClick={SendToTSV({
    reference: { ...reference },
  })}
>
  Send
</Button>;
```
