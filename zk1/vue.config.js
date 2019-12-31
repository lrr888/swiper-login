const data=require('./public/mock/data.js')
module.exports={
  lintOnSave:false,
  devServer:{
    before:function(app){
      app.get('/api/app',(req,res)=>{
        res.json({
          errCode:0,
          list:data
        })
      })
    // 导航守卫接口
    // const dell=[
    //   z=123,
    //   pwd=111
    // ]
    // app.get('/api/login',(req,res)=>{
    //   const {z,pwd}=req.query
    //   const getlogin=list.filter(val.z==z && alert.pwd==pwd)
    // })
    // if(getlogin===0){
    //   res.json({
    //     errCode:0,
    //     token:`bwei_${z}_${pwd}`
    //   })
    // }else{
    //   res.json({
    //     errCode:-1
    //   })
    // }
    }
  }
}