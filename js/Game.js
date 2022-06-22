class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount()
    car1 = createSprite(width/2-100, height-100)
    car1.addImage("car1", car1Img)
    car2 = createSprite(width/2+100, height-100)
    car2.addImage("car2", car2Img)
  }

  play(){
    form.hide()
    form.titleImg.position(40, 50)
    Player.getPlayersInfo()
    if(allplayers !== undefined){
      drawSprites()
    }
  }

  getState() {
    var gamestateref = datatbase.ref('gameState')
    gamestateref.on("value",function(data){
      gameState = data.val()
    })
  }

  updateState(state){
    database.ref("/").update({
      gameState:state
    })
  }
}
