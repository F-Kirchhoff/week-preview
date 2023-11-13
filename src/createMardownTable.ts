export default function createMarkdownTable(rows: string[]): string {
  const dayData: { [day: string]: { am: string; pm: string } } = {
    Monday: { am: "", pm: "" },
    Tuesday: { am: "", pm: "" },
    Wednesday: { am: "", pm: "" },
    Thursday: { am: "", pm: "" },
    Friday: { am: "", pm: "" },
  };
  const days = Object.keys(dayData);

  rows.forEach((session, index) => {
    const dayIndex = Math.floor(index / 2);
    if (dayIndex >= days.length) return;

    dayData[days[dayIndex]][index % 2 === 0 ? "am" : "pm"] = session;
  });

  const table = [
    "| Day | am | pm |\n| --- | -- | -- |",
    ...days.map(
      (day) => `| ${day} | ${dayData[day].am} | ${dayData[day].pm} |`
    ),
  ].join("\n");

  return table;
}
