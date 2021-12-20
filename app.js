const express= require('Express');
const app=express();
const ejs=require('ejs');
const axios = require('axios');
const bodyParser= require ('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'))

// const curl="http://www.omdbapi.com/?t=spiderman&apikey=9e13bb67";




app.set('view engine', 'ejs');




app.get('/',function(req,res){
    

    res.render("home"); 


})





app.post('/home',function(req,res){


    

    const mvname = req.body.movieNme;
    console.log(mvname);
    






    axios.get('http://www.omdbapi.com/?t='+mvname+'&apikey=9e13bb67')
    .then((response)=> {
 
          
                     


        res.render("result", {
                             poster:response.data.Poster, 
                             title:response.data.Title,
                             year:response.data.Year,
                             released:response.data.Released,
                             director:response.data.Director,
                             writer:response.data.Writer,
                             actors:response.data.Actors
                        
                        
                        
                        } );
       
       
        res.send()



        
    })
    







})






app.get('/search',function(req,res){
 
    
   
  

})





app.get('/post',function(req,res){


    res.render("post");
    console.log("User Click On Post Route");
  
  });
  
  
  
  
  
  app.get('/about',function(req,res){
  
  
    res.render("about");
    console.log("User Click On about Route");
  
  });
  
  
  app.get('/contact',function(req,res){
  
  
    res.render("contact");
    console.log("User Click On contact Route");
  
  });
  
  
  app.get('/help',function(req,res){
  
  
    res.render("help");
    console.log("User Click On help Route");
  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  















app.listen(3000,function(){
    console.log("Server Is Staring On Port 3000")
})




