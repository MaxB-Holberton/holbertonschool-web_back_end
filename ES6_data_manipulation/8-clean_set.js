const cleanSet = (theset, startString) => {
  let rtn = '';
  if (startString === '') {
    return rtn;
  }
  theset.forEach((item) => {
    if (item.startsWith(startString)) {
      rtn += rtn.length === 0 ? item.replace(startString, '') : item.replace(startString, '-');
    }
  });
  return rtn;
};

export default cleanSet;
