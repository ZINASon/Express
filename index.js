var express = require('express');
var app = express();
app.use(express.static(__dirname+'/Public'))
////
const datemiddleware = (req, res, next) => {
    const date = new Date(Date.now());
    const day = date.getDay(); // 24
    const hours = date.getHours();
    console.log(date, day, hours);
    if ((day <= 3 && day >= 5 && hours <= 9 && hours >= 17) === true) {
      next();
    } else {
      console.log("server is not available");
  
      res.sendFile(__dirname + "/public/close.html");
    }
};
// respond with "hello world" when a GET request is made to the homepage
app.get('/',datemiddleware, function(req, res) {
  res.sendFile(__dirname+'/Public/Home.html');
});
//////Our Services/////
app.get('/OurServices',datemiddleware, function(req, res) {
    res.sendFile(__dirname+'/Public/OurServices.html');
  });
//////ContactMe/////

app.get('/ContactUs',datemiddleware, function(req, res) {
    res.sendFile(__dirname+'/Public/ContactUs.html');
  });


app.listen(4000,(err)=>{
    if(err) throw err;
    else console.log('server is running on port 4000')
})