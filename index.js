const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const SteamUser = require('steam-user');
const newuser = {};

const account = {
    accountName : '',
    password : '',
    steamGuard : ''
};

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req , res){
})

app.get('/login_api', function(req , res){

})

app.post('/login_api' , function(req , res){
    account.accountName = req.body.accountName;
    account.password = req.body.password;
    console.log(req);
    console.log(req.body.accountName);
    // viewAccount(account);
    res.send({ error : 'hello world'})

})

app.post('/steam_guard', function(req, res){
    account.steamGuard = req.body.steamGuard;
    res.redirect('http://localhost:3000/panel');
})

viewAccount = (data) => {
    const newName = account.accountName;
    newuser[newName] = new SteamUser();

    newuser[newName].logOn(data);

    newuser[newName].on('steamGuard', function(domain, callback) {
        var code = account.steamGuard;
        callback(code);
    });

    newuser[newName].on('error', (err) => {
        console.log(err)
    })


    newuser[newName].on('loggedOn' , function(){
        newuser[newName].setPersona(1);
        newuser[newName].gamesPlayed(730);
    })
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
}


const port = process.env.port || 3001;

app.listen(3001);