var express = require ('express');
var expressHandlebars = require ('express-handlebars'); //handlebars is used for TEMPLATING //main power of TEMPLATING is that you have the structure, such as title, header, body, etc. and have that structure dynamically populated with what you want, if not, then you would have to hard-code all of them for every page 
var app = express();
var PORT = process.env.NODE_ENV || 7070;
var lineage = { //this an object, more specifically a nested object
    lannister: {
        house: 'House Lannister',
        parents: {
            first_parents: 'Joanna & Tywin',
            second_parents: 'Devan & Dorna'
        },
        child: {
            first_child: 'Cersei',
            second_child: 'Jaime',
            third_child: 'Tyrion',
            fourth_child: 'Lancel'
        }
    },
    targaryen: {
        house: 'House Targaryen',
        parents: 'Aerys II & Rhaella',
        child: {
            first_child: 'Rhaegar',
            second_child: 'Viserys',
            third_child: 'Daenerys'
        }
    },
    stark: {
        house: 'House Stark',
        parents: 'Eddard & Catelyn',
        child: {
            first_child: 'Robb',
            second_child: 'Sansa',
            third_child: 'Arya',
            fourth_child: 'Bran',
            fifth_child: 'Rickon'
        }
    },
};

app.listen(PORT, function(){
  console.log('listening on port %s', PORT);
});

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'})); // this tells our app to run handlebars
app.set('view engine', 'handlebars');

app.get('/', function(req, res){// app.get is the request from the browser, and the server figures this out and figures out the response, this routes to home page; get is the verb (this could be get, post, etc.) this is the file path, this is the routing, req res is a callback
  res.render('gameofthrones', lineage.stark);//res = response or result of the server to the browser, render means what template we want to use, in this case, gameofthrones
});