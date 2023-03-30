/**
 * Return ellipsis of a given string
 */
const ellipsis = (text: string, size: number) => {
  return `${text.split(' ').slice(0, size).join(' ')}...`;
};

export { ellipsis };
