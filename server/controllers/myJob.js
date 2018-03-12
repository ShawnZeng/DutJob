module.exports = function (ctx, next) {
  ctx.state.data = { msg: 'Hello World' }
}

const { mysql } = require('../qcloud')

module.exports = async ctx => {

  // 查
  var res = await mysql("JOB_INFO").select('*')

  console.log(res)

  ctx.state.data = res
}