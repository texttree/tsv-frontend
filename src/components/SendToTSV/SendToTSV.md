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
  })}
>
  Send
</Button>;
```
