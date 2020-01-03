# myFetch

## How to instal
```bash
npm i fetch-npm

```

``````bash

let myFetch = require("fetch-npm");
myFetch.init({
    address: "https://reqres.in/api/users/",
    key: "1234"
})

myFetch.put("5", {
    name: 'Kasper'
}).then(data => console.log(data));


```