const express=require('express');
const path=require('path');

const app=express();


app.use('/css',express.static('css'));
app.set('view engine','ejs');
app.use(express.urlencoded());


var todo=[];

app.get('/',(req,res)=>{
    res.render('index',{todo:todo});
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.post('/additem',(req,res)=>{
    var newitem=req.body.item;
    todo.push(newitem);
    console.log(todo);
    res.redirect('/');
});

app.post('/removeitem',(req,res)=>{
    var ritem=req.body.check;
    var index = todo.indexOf(ritem);
    todo.splice(index,1);
    res.redirect('/')
});



app.listen(8080,()=>console.log("Server is running"));