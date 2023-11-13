export default function parseSchedule(input: string) {
  return input
    .split("\n")
    .map((row) => row.replace(/[^a-zA-Z0-9\s]/g, "").trim())
    .filter((row) => row.length > 0);
}
