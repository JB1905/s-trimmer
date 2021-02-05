export const trimStart = (value: string) => value.replace(/^\s+/, '');
export const trimLeft = trimStart;

export const trimEnd = (value: string) => value.replace(/\s+$/, '');
export const trimRight = trimEnd;

export const trimBetween = (value: string) => value.replace(/\d+\*s+/g, ' ');
export const trimCenter = trimBetween;

const sTrimmer = (value: string) => trimBetween(trimEnd(trimStart(value)));

export default sTrimmer;
