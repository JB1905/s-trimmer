const START_PATTERN = /^\s+/;
export const trimStart = (value: string) => value.replace(START_PATTERN, '');
export const trimLeft = trimStart;

const END_PATTERN = /\s+$/;
export const trimEnd = (value: string) => value.replace(END_PATTERN, '');
export const trimRight = trimEnd;

const CENTER_PATTERN = /(?<=\S+)\s+(?=\S+)/g;
export const trimBetween = (value: string) =>
  value.replace(CENTER_PATTERN, ' ');
export const trimCenter = trimBetween;

const sTrimmer = (value: string) => trimBetween(trimEnd(trimStart(value)));
export const trim = sTrimmer;

export default sTrimmer;
