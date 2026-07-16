export function getRandomWidth(
  min: number,
  max: number
): string {
  const value = Math.floor(
    Math.random() * (max - min + 1) + min
  );

  return `${value}%`;
}