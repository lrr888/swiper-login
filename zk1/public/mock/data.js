const Mock=require('mockjs')
// mock数据
const data=Mock.mock({
  'list|5':[
    {
      'id|+1':0,
      'img':'@image(100x100,@color)',
      'name':'@cname'
    }
  ]
})
module.exports=data
// console.log(data.list)