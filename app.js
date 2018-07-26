var express = require("express"),
    path    = require("path"),
    cookieParser = require("cookie-parser"),
    bodyParser  = require("body-parser"),
    exphbs      = require("express-handlebars"),
    expressValidator = require("express-validator"),
    flash              = require("connect-flash"),
    session         = require("express-session"),
    passport        = require("passport"),
    LocalStragegy   = require("passport-local").Strategy,
    mongo           = require("mongodb"),
    mongoose        = require("mongoose");

mongoose.connect('mongodb://localhost/loginApp');
var db = mongoose.connection;