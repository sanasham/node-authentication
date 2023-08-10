const express = require('express');
const { connectToDatabase } = require('./database/connection.js');
const userRoutes = require('./routes/userRoute.js');

const app = express();
const PORT = process.env.PORT || 4001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
connectToDatabase();
// const middleware = (req, res, next) => {
//   console.log('request', req);
//   next();
// };

// app.use('/', middleware, (req, res) => {
//   res.render('../pages/LandingPage.ejs');
// });
app.use('/users', userRoutes);
app.use('/pages', userRoutes);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
