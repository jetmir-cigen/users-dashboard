/**
 * Debounce function to limit the rate of function executions
 *
 * @param func - The function to be executed
 * @param delay - The time delay in ms before function can be executed again
 * @returns A function that can be called to debounce execution of func
 */
export const debounce = (func: Function, delay: number) => {
  let timer: number;

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

/**
 * Extracts the ID from a SWAPI API URL
 *
 * @param url - The SWAPI API URL
 * @param resource - The SWAPI resource name
 * @returns The ID extracted from the URL, or undefined if URL is invalid
 */
export const extractIdFromUrl = (url: string, resource = "people") => {
  const regex = new RegExp(`^https:\\/\\/swapi\\.dev\\/api\\/${resource}\\/(\\d+)\\/`);

  const match = url.match(regex);

  if (match) {
    return match[1];
  } else {
    return undefined;
  }
};
