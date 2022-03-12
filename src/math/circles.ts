export const radiansToDegrees = (radians: number) => {
  return (radians * 180) / Math.PI;
};

export const sectorArea = (subtendedAngleInRadians: number, radius: number) => {
  return (radius ** 2 * subtendedAngleInRadians) / 2;
};

export const triangleAreaTrig = (a: number, b: number, CDegrees: number) => {
  return (a * b * Math.sin(CDegrees)) / 2;
};

export const segmentArea = (
  subtendedAngleInRadians: number,
  radius: number
) => {
  const triangle = triangleAreaTrig(
    radius,
    radius,
    radiansToDegrees(subtendedAngleInRadians)
  );
  const sector = sectorArea(subtendedAngleInRadians, radius);
  return sector - triangle;
};
