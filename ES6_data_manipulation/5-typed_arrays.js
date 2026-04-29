const createInt8TypedArray = (length, position, value) => {
  if (position > length || position < 0) {
    throw new Error('Position outside range');
  }
  const data = new DataView(new ArrayBuffer(length));
  data.setInt8(position, value);

  return data;
};

export default createInt8TypedArray;
