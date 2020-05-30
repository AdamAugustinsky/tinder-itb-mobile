export default (value) => value.toLowerCase()
  .split(' ')
  .map((word) => {
    if (word.length <= 4) return word;

    return word.charAt(0).toUpperCase() + word.substring(1);
  })
  .join(' ');
