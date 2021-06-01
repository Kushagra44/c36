class Form{
constructor(){}
display(){
    var title=createElement("h2")
    title.html("CAR RACING GAME")
    title.position(450,100)
    var input= createInput("Name")
    input.position(530,250)
    var button= createButton("PLAY")
    button.position(550,300)
    var greeting= createElement("h3")
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name=input.value()
        greeting.html("Hello "+name)
        greeting.position(530,270)
    })
}
}
