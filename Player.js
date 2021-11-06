class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }  


 addPlayer(){
 
  var PlayerIndex = "Players/Player" + this.index
  if(this.index===1) {





  }

  database.ref(PlayerIndex).set({
    name : this.name, 
    positionX: this.positionX,
    positionY: this.positionY,
  })
  

 }

updateCount(count){

database.ref("/").update({
  playerCount: count 
})

}

getCount(){

  var playerCountref = database.ref("playerCount")
  playerCountref.on("value",data=>{
    playerCount = data.val();
  })



}


}