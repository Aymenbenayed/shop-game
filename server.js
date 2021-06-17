const FacebookStrategy=require("passport-facebook").Strategy
const passport = require("passport")
const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();
const app = express();
const User = require("./models/User"); 


// middleware global
app.use(express.json());




/*****sendmail (contact us )********* */
const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport');
const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{api_key:process.env.SENDGRID_API}}))

    app.post('/send', (req, res) => {
        const { name , phone , email, message ,subject } = req.body
        console.log(req.body)
        transporter.sendMail({
        to:'laymen.bnmohamed@gmail.com',
        from: 'laymen.bnmohamed@gmail.com',
        subject:subject,
        html:`
        <h1> Email:<br></h1>
        <h1> ${email}</h1>
        <h1>Full Name: <br></h1>
        <h2>${name}</h2>
        <h1>Phone:<br></h1>
        <h2>(+216)${phone}</h2>
        <h2>Message:<br></h2>
        <p>${message}</p>`})
        .then(resp => {
        res.json({resp})
        })
        .catch(err => {
        console.log(err)
        })})


/* .................................... */


/**Oauth2 facebook */
app.use(passport.initialize());
passport.use(new FacebookStrategy({
    clientID: '208210534043963',
    clientSecret: '9ab8f7bd7034e2ccc013f660ff59bcfa',
    callbackURL: "/auth/facebook/callback",
    proxy:true,
  },

  (accessToken, refreshToken, profile,done)=>{
    console.log(profile)
        User.findOne({userId:profile.id})
        .then((existingUser)=>{
            if(existingUser){
                done(null,existingUser)
            }else{
                new User({
               userId:profile.id,
               name:profile.displayName,
               token:profile.token,
               email :profile.email
            }).save()
           .then((user)=>{
               done(null,user)
           })}})}));

           
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',passport.authenticate('facebook', 
    {successRedirect: 'http://localhost:3000/Profile'
    ,failureRedirect: '/signin',})
    /* , (req, res) => {
        var token = req.user.jwtoken;
        res.json({token: token});} */
); 


connectDB();


// router
app.use("/api/user", require("./router/user"));
app.use("/api/admin", require("./router/admin/admin"));
app.use("/api/category", require("./router/category"));
app.use("/api/product", require("./router/product"));
app.use("/api/order", require("./router/order"));
app.use("/api/favorite", require("./router/favorite"));
app.use('/uploads',express.static('uploads'))


if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'))
    const path=require('path')
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client', 'build' , 'index.html'))
    })
}


const PORT = process.env.PORT;
app.listen(PORT, (err) =>
err ? console.error(err) : console.log(`server is runinig on port ${PORT}`)
);