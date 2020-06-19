const xTrim = (value: string) => {
  return value.trim().split(/\s+/).join(' ');
};

export default xTrim;
