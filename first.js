const path = require('path');
const express = require('express');
const axios  = require('axios')
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
const check = process.env.check;

app.get('/', function (req, res) 
{
    
    axios.get('http://localhost:3010/data').then(response =>
    {
      res.send(response.data)
    })
    
  });

const port  = 3001;
app.listen(port, () => {
    console.log('Server is running at port '+port);
  });

  
  /*
  axios.get(url)
   .then(
     response=>{
         console.log(response);
        console.log(response.data.length)
        if(response.data.length===0)
        this.props.history.push('/noflights')
         this.setState({flights:response.data});
         this.setState({submitted:'true'});
     }
  )*/