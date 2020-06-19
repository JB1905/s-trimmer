const sTrimmer = (value: string) => {
  return value.trim().split(/\s+/).join(' ');
};

export default sTrimmer;
