ErrorReport

```jsx
import React from "react";
import { ErrorReport } from "@texttree/tsv-frontend";

const reference = {
  resource: "rob",
  bookId: "tit",
  chapter: "1",
  verse: "1",
  serverLink: "https://lit-falls-48214.herokuapp.com/send-to-file",
  textSelected: "Word",
  comment: "test",
};

<ErrorReport reference={reference} />;
```
