export function findNextMonday() {
  const today: Date = new Date();
  const daysUntilNextMonday = (15 - today.getDay()) % 7;

  const nextMonday = new Date(
    today.getTime() + daysUntilNextMonday * 1000 * 60 * 60 * 24
  );

  return nextMonday;
}
