class Form{
    constructor(){

    }
display(){
    var title=createElement('h2')
    title.html("car racing game")
    title.position(600,100);
    var input=createInput("name")
    var button=createButton("play")
    var greeting=createElement("h3")
    input.position(500,200)
    button.position(550,250)
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name=input.value()
        greeting.html("hello "+name)
        greeting.position(550,150);
    })
}



}