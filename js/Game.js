class Game{
    constructor(){}
 getState(){
     var kush=database.ref("gameState")
     kush.on("value",function(data){
         gameState=data.val()
     })
 }   
 update(state){
     database.ref("/").update({
         gameState:state
     })
 }
 start(){
     if(gameState===0){
         form=new Form()
         form.display()
     }
 }
}