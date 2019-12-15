var initialState = [
  {
    id: 1,
    ten: "abc",
    gia: 100,
    hang: "abc",
    mota: "abc",
    trangthai: "abc"
  },
  {
    id: 2,
    ten: "abc",
    gia: 100,
    hang: "abc",
    mota: "abc",
    trangthai: "abc"
  },
  {
    id: 3,
    ten: "abc",
    gia: 100,
    hang: "abc",
    mota: "abc",
    trangthai: "abc"
  }
];
const items = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default items;
