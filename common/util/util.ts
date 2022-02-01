export const arrayFromRange = (start: number, range: number) => {
  return Array.from(Array(range + 1 - start).keys()).map((n) => n + start);
};

export const formatProductSlug = (name: string) => {
  return name.replace(/\s/g, "-").toLowerCase();
};
