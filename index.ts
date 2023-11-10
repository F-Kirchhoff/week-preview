import createHandover from "./createHandover";
import createMarkdownTable from "./createMardownTable";
import parseSchedule from "./parseSchedule";

const nextMonday = "11/6/2023";

const input = `
Git CLI & Remote
Git Branches and PRs
Recap Project 1
Accessibility 🆕 / Active Learning
JS Basics
CSS Structure 🆕
JS Variables and Numbers
📒 Self Directed Learning - Week 2
JS Conditions and Booleans
CSS Responsive 🆕 / Active Learning
`;
const rows = parseSchedule(input);

const markdownTable = createMarkdownTable(rows);
console.log(markdownTable);

const handover = createHandover(rows, new Date(nextMonday));

console.log(handover);
