const express = require("express");
const path = require("path");
const app = express();

app.listen(3030, () => console.log("Exito!"));

app.get("/index.html", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/index.html"));
})

app.get("/babbage.html", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/babbage/babbage.html"));
})

app.get("/berners-lee.html", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/berners-lee/berners-lee.html"));
})

app.get("/clarke.html", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/clarke/clarke.html"));
})

app.get("/hamilton.html", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/hamilton/hamilton.html"));
})

app.get("/hopper.html", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/hopper/hopper.html"));
})

app.get("/lovelace.html", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/lovelace/lovelace.html"));
})

app.get("/turing.html", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/turing/turing.html"));
})

app.use(express.static("public"));
