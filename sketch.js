var gameState = 0
var form, game,player
var playerCount
var database

function setup(){
    createCanvas(500,500);
    database=firebase.database()
game=new Game()
game.getState()
game.start()
}

function draw(){

}

