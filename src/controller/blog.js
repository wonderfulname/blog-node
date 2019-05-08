const getList = (author, keyword) => {
  //先返回假数据，但格式是正确的
  return [
    {
      id: 1,
      title:'标题1',
      createTime: 1546610492112,
      author: 'John'
    },
    {
      id: 2,
      title:'标题2',
      createTime: 1546610492777,
      author: 'Hello'
    }
  ]
}

module.exports = {
  getList
}