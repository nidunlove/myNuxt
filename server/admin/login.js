// import express from 'express'
const express = require('express')

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()



var _msg = require('../mongoBase/msg')

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  // if (req.body.username === 'demo' && req.body.password === 'demo') {
  //   req.session.authUser = { username: 'demo' }
  //   return res.json({ username: 'demo' })
  // }
  // res.status(401).json({ message: 'Bad credentials' });

  let reqBody = req.body;
  let username = reqBody.username;
  var password = reqBody.password;

  console.log(req.session);
  console.log(username);
  console.log(password);
  if(username === 'nidun' && password === '88646797nd'){
    req.session.authUser = { username: username };
    let res_data = {username:username,msg:"ok"};
    console.log(res_data);
    _msg.pass(res,'',res_data);
    // res.redirect('/admin');
  } else {
    _msg.fail(res,'验证用户名密码失败',500)
  }

  // TestService.pageQuery(page, limit,'', whereStr, mysort).then(res_db => {
  //   _msg.pass(res,'',res_db)
  // }).catch(err => {
  //   _msg.fail(res,'500',500)
  //   console.log(err);
  // });
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

// Export the server middleware
// export default {
//   path: '/api',
//   handler: router
// }
module.exports = router;
