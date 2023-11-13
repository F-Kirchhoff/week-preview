import { findNextMonday } from "./findNextMonday";

export default function createHandover(
  rows: string[],
  startDate: Date = findNextMonday()
) {
  const handover = rows.map((session, index) => {
    const dayIndex = Math.floor(index / 2);
    const isAM = index % 2 === 0;
    const date = new Date(
      startDate.getTime() + dayIndex * 1000 * 60 * 60 * 24
    ).toDateString();

    if (isAM) {
      return `    
### :small_blue_diamond: ${date} AM

| ---- | ----- |
| __Session__  |${session}  |
| __Coach__ |     |
| __Todos__ | - Attendance Tool   |
| __Notes__ |    |

`;
    } else {
      return `
### :small_orange_diamond: ${date} PM

| ---- | ----- |
| __Session__  |${session}  |
| __Coach__ |     |
| __Todos__ |    |
| __Notes__ |    |

`;
    }
  });
  return handover.reverse().join("\n");
}
