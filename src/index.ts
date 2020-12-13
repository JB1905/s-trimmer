export const trimStart = (value: string) => value.replace(/^\s+/, '');

export const trimEnd = (value: string) => value.replace(/\s+$/, '');

export const trimCenter = (value: string) => value.split(/\s+/).join(' ');

const sTrimmer = (value: string) => trimCenter(trimEnd(trimStart(value)));

export default sTrimmer;
