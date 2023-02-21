export const debounce = (func: Function, delay: number) => {
  let timer: number;

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

export const extractIdFromUrl = (url: string, resource = "people") => {
  const regex = new RegExp(`^https:\\/\\/swapi\\.dev\\/api\\/${resource}\\/(\\d+)\\/`);

  const match = url.match(regex);

  if (match) {
    return match[1];
  } else {
    return undefined;
  }
};
