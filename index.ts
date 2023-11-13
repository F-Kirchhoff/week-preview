import createHandover from "./src/createHandover";
import createMarkdownTable from "./src/createMardownTable";
import parseSchedule from "./src/parseSchedule";

const input = `
JS Functions
JS Functions 2
HTML Forms 🆕
JS Inputs and Strings 🆕 / Active Learning
JS Objects and Arrays
JS Forms 🆕
JS createElement
📒 Self Directed Learning - Week 3
Recap Project 2
Recap Project 2
`;
const rows = parseSchedule(input);

const markdownTable = createMarkdownTable(rows);
const handover = createHandover(rows);

const output = Bun.file("./output.md").writer();
output.flush();
output.write(markdownTable);
output.write(`\n---\n`);
output.write(handover);
output.flush();
