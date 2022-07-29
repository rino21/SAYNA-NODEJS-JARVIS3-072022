const express = require("express");
const url = require("url");
const app =express();
app.use("/public",express.static("public"));
const port = 8000;


//affichage de la page index.html
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

//Route d'authetification d'un utilisateur en utilisant la methode get pour que on puisse afficher la page de login
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
});
//Route d'authetification d'un utilisateur
app.post("/login",(req,res)=>{
    res.send("PAGE DE LOGIN !");
});

//Route d'inscription d'un utilisateur
app.post("/register",(req,res)=>{
    res.send("PAGE D'INSCRIPTION");
});

//Route invité un utilisateur
app.post("/invitation",(req,res)=>{
    res.send("PAGE D'INVITATION");
});

//Route gestion d'une invitation
app.get("/invitation",(req,res)=>{
    res.send("PAGE DE GESTION D'UNE INVITATION");
});

//Route de création d'un pièce
app.get("/room",(req,res)=>{
    res.send("PAGE DE CREATION D'UN PIECE !");
    
});

//Route de suppression d'un pièce
app.get("/room:name",(req,res)=>{
    res.send("PAGE DE SUPPRESSION D'UN PIECE");
    var name = req.params.name;
    //var q = url.parse(req.url,true).query;
    console.log(`${name}`);
});

//Route de création d'un objet
app.post("/object",(req,res)=>{
    res.send("PAGE DE CREATION D'UN OBJET !");
});

//Route de suppression d'un objet
app.delete("/object",(req,res)=>{
    res.send("PAGE DE SUPPRESSION D'UN OBJET !");
});

//Route de changement d'un objet
app.put("/object",(req,res)=>{
    res.send("PAGE DE CHAGEMENT D'UN OBJET !");
});


app.listen(port,()=>console.log(`l'application utilise le port : ${port}`));
