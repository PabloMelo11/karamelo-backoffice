function handleTruncateString(str: string, size: number): string {
  if (str === undefined || size === undefined) {
    return str;
  }

  let shortText = str;
  if (str && str.length >= size + 3) {
    shortText = str.substring(0, size).concat('...');
  }
  return shortText;
}

export default handleTruncateString;
