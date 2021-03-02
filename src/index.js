module.exports = function check(string, bracketsConfig) {
  if (string === '') return true;
  if (string.length % 2 !== 0) return false;

  let open = '';
  let close = '';
  let same = '';

  bracketsConfig.forEach(el => {
      if (el[0] !== el[1]) {
          open = `${open}${el[0]}`;
          close = `${close}${el[1]}`;
      } else {
          same = `${same}${el[0]}`;
      }
  });

  const stack = [];
  for (let i = 0; i < string.length; i++) {
      if (open.includes(string[i])
          || same.includes(string[i]) && stack[stack.length - 1] !== string[i]) {
          stack.push(string[i]);
      } else {
          const last = stack.pop();
          if (same.includes(string[i] && string[i] === last)) continue;
          if (open.indexOf(last) !== close.indexOf(string[i])) return false;
      }
  }
  return stack.length === 0;
};
