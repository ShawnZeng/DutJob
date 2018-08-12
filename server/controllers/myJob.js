const { mysql } = require('../qcloud')

module.exports = async ctx => {

  // 查
  var res = await mysql('myJobDB').select('*').from('JOB_INFO')

  console.log(res)
  

  ctx.state.data = res
}