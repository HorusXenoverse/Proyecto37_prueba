class Quiz {
  constructor(){
    this.distance = 0;
    this.name = null;
    this.index = null;

  }

  //*No sé si sea más o menos hací
  update(){
    var playerIndex = "constestants/contestant" + this.index;
    database.ref(playerIndex).set({
      
      name:this.name,
      distance: this.distance
    });
  }
  static getContestantInfo(){
    var playerInfoRef = database.ref('constestants');
    playerInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }




  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
    
    //escribe aquí el código para cambiar el color de fondo 
      
    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
  

    //llama aquí a getContestantInfo( )
    //*No sé como hacer q funcione
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("*NOTA: ¡El concursante que respondío correctamente, está resaltado en color verde!",90,230);

      fill("black");
      textSize(20);
      text("Resultado del cuestionario:",350,0);
    }

  for(var plr in allContestants){
    var correctsAns = "2";
    if(correctsAns === allContestants[plr].answer){
      fill("Green");
    }
    else{
      fill("red");
    }
  }
    //escribe la condición para comprobar si contestantInfor no está indefinido 

    //escribe aquí el código para agregar una nota

    //escribe el código para resaltar al concursante que respondió correctamente
    
  }

}
