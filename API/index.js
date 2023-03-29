const express = require('express');
// route
const route = require('./controller');
// cors
const cors = require('cors');
// port
const port = parseInt(process.env.PORT) ;
// Express app
const app = express();
// Middleware
const {errorHandling} = require('./middleware/ErrorHandling');
//
const cookieParser = require('cookie-parser');

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', 'https://nonto-capstone-project.web.app')
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});
app.use(route);
    app.use(
    cors(),
    cookieParser(),
    express.json,
    express.urlencoded({extended: false})
)
//gadgetgeekcentral or /
route.get("^/$|/GadgetGeekCentral", (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'./view/index.html'));
})

app.listen(port,() =>{
    console.log(`Server is running at ${port}`)
});

app.use(errorHandling);