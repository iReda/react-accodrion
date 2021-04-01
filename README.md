# Accordion

This a simple propject that renders an FAQ accordion section with button to show/hide answers to a certain question

#### Components

It consists of 2 simple components

- App: which imports the questions from a local data.js file and renders a list of Question components

- Questions: which takes the information of a question as props and renders it and implements the functionality of a button to show/hide the answer of a certain question

#### Idea

[uidesigndaily](https://uidesigndaily.com/posts/sketch-accordion-website-day-1175)

![](./idea.png);

#### React Icons

[react icons](https://react-icons.github.io/react-icons/)

```
npm install react-icons --save
```

```javascript
import { FaHome } from "react-icons/fa";
const Component = () => {
  return <FaHome className="icon"></FaHome>;
};
```
