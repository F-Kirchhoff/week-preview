export default function createHandover(rows: string[], startDate: Date) {
  const handover = rows.map((session, index) => {
    const dayIndex = Math.floor(index / 2);
    const isAM = index % 2 === 0;
    const date = new Date(
      startDate.getTime() + dayIndex * 1000 * 60 * 60 * 24
    ).toDateString();
    return `### ${
      isAM ? ":small_blue_diamond:" : ":small_orange_diamond:"
    } ${date} ${isAM ? "AM" : "PM"} 

**Session**: ${session}

**Coach**: 

**Todos**:


Notes: 
`;
  });
  return handover.reverse().join("\n\n");
}
