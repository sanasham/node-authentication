const { getSession } = require('../service/Session.js');

async function allowToLoggedinUsers(req, res, next) {
  console.log('allowToLoggedinUsers inside');
  const userSessionId = req.cookies.sessionId;
  console.log(userSessionId);
  if (!userSessionId) {
    console.log('inside 1 if');
    return res.redirect('/users/login', '..pages/login.ejs', {
      error: 'Invalid username or password',
    });
  }
  const user = getSession(userSessionId);
  //   if (!user) {
  //     console.log('inside 2 if');
  //     return res.redirect('/users/login', '..pages/login.ejs', {
  //       error: 'Invalid username or password',
  //     });
  //   }
  req.user = user;
  next();
}

module.exports = { allowToLoggedinUsers };
