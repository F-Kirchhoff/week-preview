import createMarkdownTable from "./src/createMardownTable";
import parseSchedule from "./src/parseSchedule";

const file = Bun.file("./input.txt");
const input = await file.text();

const rows = parseSchedule(input);

const markdownTable = createMarkdownTable(rows);
// const handover = createHandover(rows);

Bun.write("./output.md", markdownTable);
