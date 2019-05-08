const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json')
  const url = req.url
  const path = url.split('?')[0]
  req.path = path
  // 解析path
  req.query = querystring.parse(url.split('?')[1])

  // 处理blog路由
  const blogData = handleBlogRouter(req, res)
  // 处理user路由
  const userData = handleUserRouter(req, res)

  if (blogData) {
    res.end(
      JSON.stringify(blogData)
    )
    return;
  }

  if (userData) {
    res.end(
      JSON.stringify(userData)
    )
    return;
  }

  //未命中路由，返回 404
  res.writeHead(404, {"Content-type": "text/plain"})
  res.write("404 not found")
  res.end()
}

module.exports = serverHandle