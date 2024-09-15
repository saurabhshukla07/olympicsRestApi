const express = require('express');
const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({
ranking:{
    type:Number,
    require:true,
    unique:true
},
name:{
    type:String,
    require:true,
    trim:true
},
dob:{
    type:Date,
    require:true,
    trim:true
},
country:{
    type:String,
    require:true,
    trim:true
},
score:{
    type:Number,
    require:true,
    trim:true
},
event:{
    type:String,
    default:"100m"
}
})

// we are creating Collection
const MensRanking = new mongoose.model("MenRanking",menSchema)

module.exports = MensRanking;