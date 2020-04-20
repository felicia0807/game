//Challenge 1:your age in days

function ageInDay()
{
    var birthYear= prompt('What year were you born?');
    var ageInDays=(2020-birthYear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('You are '+ ageInDays + ' days old')
    h1.setAttribute('id','ageInDays'); //set ageInDays as id
    h1.appendChild(textAnswer); //add the ans
    document.getElementById('flex-box-result').appendChild(h1);
    
}

function reset()
{
    document.getElementById('ageInDays').remove();
}


//Generate WJSN :2

// var imgArray=new Array();
// imgArray[0]=new Image();
// imgArray[0].src='https://thumbs.gfycat.com/WholeJoyfulIndianabat-size_restricted.gif';
// imgArray[1]=new Image();
// imgArray[1].src='https://thumbs.gfycat.com/BarrenPoisedGoral-size_restricted.gif';
// imgArray[2]=new Image();
// imgArray[2].src='https://66.media.tumblr.com/1a22cd05bcc0e4ee049628e764c6272d/tumblr_p4tjhwhEX91smuwnio1_500.gifv';
// imgArray[3]=new Image();
// imgArray[3].src='https://thumbs.gfycat.com/DevotedMarvelousBlueshark-size_restricted.gif';
// imgArray[4]=new Image();
// imgArray[4].src='https://thumbs.gfycat.com/InferiorPowerfulIvorybilledwoodpecker-size_restricted.gif';
// imgArray[5]=new Image();
// imgArray[5].src='https://thumbs.gfycat.com/GenuineLeafyAmericancreamdraft-size_restricted.gif';
// imgArray[6]=new Image();
// imgArray[6].src='https://thumbs.gfycat.com/WholeJoyfulIndianabat-size_restricted.gif'; //exy
// imgArray[7]=new Image();
// imgArray[7].src='https://thumbs.gfycat.com/UnrealisticCautiousGalapagoshawk-size_restricted.gif';
// imgArray[8]=new Image();
// imgArray[8].src='https://thumbs.gfycat.com/WholeJoyfulIndianabat-size_restricted.gif'; //exy
// imgArray[9]=new Image();
// imgArray[9].src='https://66.media.tumblr.com/c894bade3b77d78b85e9e4cc0fe14797/tumblr_p4t33417iM1vi1o95o2_500.gifv';
// imgArray[10]=new Image();
// imgArray[10].src='https://thumbs.gfycat.com/WholeJoyfulIndianabat-size_restricted.gif'; /exy
// imgArray[11]=new Image();
// imgArray[11].src='https://thumbs.gfycat.com/SorrowfulHorribleItaliangreyhound-size_restricted.gif';
// imgArray[12]=new Image();
// imgArray[12].src='https://thumbs.gfycat.com/OrganicBlandKingsnake-size_restricted.gif';
// imgArray[13]=new Image();
// imgArray[13].src='https://thumbs.gfycat.com/ShallowUglyBooby-size_restricted.gif';






const WJSNsong=new Audio('song.mp3');
function generateWJSN()
{
    var image=document.createElement("img");
    var div=document.getElementById("WJSN"); //get access to the flex box div
    image.src="https://thumbs.gfycat.com/CircularDeliciousHarlequinbug-size_restricted.gif";
    WJSNsong.play();
    div.appendChild(image);
    
}


//Rock paper Scissors :3//

function rpsGame(yourChoice)
{
    console.log(yourChoice);
    var humanchoice, botchoice;
    humanchoice=yourChoice.id;

    botchoice=NumtoChoice(randToRpsInt());   //automatically get a number btw 0-2 // pass that num to NumToChoice
    console.log('Computer choice: '+botchoice);

    result=decideWinner(humanchoice,botchoice);
    console.log(result); //[0,1] human lost, bot win

    message=finalMessage(result); //you won / lost /tied {'message':'you won!', 'color':'green'}
    console.log(message);

   rpsFrontEnd(yourChoice.id,botchoice,message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function NumtoChoice(number)
{
    return['rock', 'paper','scissors'][number];
}

function decideWinner(yourChoice,comChoice)
{
var rpsDatabase={
    'rock':{'scissors':1,'rock':0.5,'paper':0},
    'paper':{'rock':1,'paper':0.5,'scissors':0},
    'scissors':{'paper':1,'scissors':0.5,'rock':0}

};

var yourScore=rpsDatabase[yourChoice][comChoice];
var comScore=rpsDatabase[comChoice][yourChoice];

return[yourScore,comScore];

}

function finalMessage([yourScore,comScore])
{
    if(yourScore === 0 )
    {
        return{'message':'You Lost!','color':'red'};
    }
    else if(yourScore === 0.5)
    {
        return{'message':'Its a tied!','color':'yellow'};
    }
    else
    {
        return{'message':'You Win!','color':'green'};
    }
}


function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage)
{
    var imagesDatabase={
        'rock':document.getElementById('rock').src, //get the rock id and img
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    //remove all the image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='" + imagesDatabase[humanImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML="<h1 style='color: " +finalMessage['color'] + "; font-size:40px; padding:30px; '>"+ finalMessage['message'] + "</h1>"
    botDiv.innerHTML="<img src='" + imagesDatabase[botImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(233,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}


//Challenge 4: Change the Color of All Buttons
var all_btn=document.getElementsByTagName('button');


var copyAllBtn=[]; //copy all btn //array
for(let i=0;i<all_btn.length;i++) //loop all the btn 7 btns times
{
    copyAllBtn.push(all_btn[i].classList[1]); // push= duplicating all btns
}

console.log(copyAllBtn);


function BtnColorChange(buttonThingy)
{
   if(buttonThingy.value==='red')
   {
       buttonRed();
   }
  else if(buttonThingy.value==='green')
   {
       buttonGreen();
   }
   else if(buttonThingy.value==='reset')
   {
       buttonReset();
   }
   else if(buttonThingy.value==='random')
   {
       buttonRandom();
   }
    
}

function buttonRed()
{
    for(let i=0;i<all_btn.length;i++)
    {

    all_btn[i].classList.remove(all_btn[i].classList[1]);
    all_btn[i].classList.add('btn-danger');
    }
}



function buttonGreen()
{
    for(let i=0;i<all_btn.length;i++)
    {

    all_btn[i].classList.remove(all_btn[i].classList[1]);
    all_btn[i].classList.add('btn-success');
    }
}

function buttonReset()
{
    for(let i=0;i<all_btn.length;i++)
    {

    all_btn[i].classList.remove(all_btn[i].classList[1]);
   all_btn[i].classList.add(copyAllBtn[i]);
    }
}

function buttonRandom()
{
    var choices=['btn-primary','btn-danger','btn-warning','btn-success'];
    for(let i=0;i<all_btn.length;i++)
    {
        var randomnum=[Math.floor(Math.random()*4)];
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add(choices[randomnum]);
    }
    }


    //challenge5:BlackJAck

    let blackjackgame=
    {
        'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
        'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
        'cards':['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
        'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,11]},
        'win':0,
        'losses':0,
        'draw':0,
        'isStand':false,
        'restart':false,
    };

    const YOU=blackjackgame['you'];
    const DEALER=blackjackgame['dealer'];

    const hitSound=new Audio('sounds/swish.m4a');
    const winSound=new Audio('sounds/cash.mp3');
    const loseSound=new Audio('sounds/aww.mp3');
    

    document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit); //click= onclick in html page
    document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);
    document.querySelector('#blackjack-stand-button').addEventListener('click',blackjackStand);

    function blackjackHit()
    {
        if(blackjackgame['isStand']===false )
        {
            let card=randomCard();
            showCard(card,YOU);
            updateScore(card,YOU);
            showScore(YOU);
        }
        
    }

    function randomCard()
    {
        let randomIndex=Math.floor(Math.random()*13);
        return blackjackgame['cards'][randomIndex];
    }


    function showCard(card,activePlayer)
    {
        if(activePlayer['score']<=21)
        {
            let cardImage=document.createElement('img');
            cardImage.src=`images/${card}.png`;
            document.querySelector(activePlayer['div']).appendChild(cardImage);
            hitSound.play();
        }
        else{

        }
       
        
    }

    function blackjackDeal()
    {  if(blackjackgame['restart']===true)
    {
        blackjackgame['isStand']=false;

        let yourImages=document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages=document.querySelector('#dealer-box').querySelectorAll('img');
       
        for(i=0;i<yourImages.length; i++)
        {
            yourImages[i].remove();
        } //straight away remove all cards

        for(i=0;i<dealerImages.length; i++)
        {
            dealerImages[i].remove();
        } //straight away remove all dealer cards


        YOU['score']=0;
        DEALER['score']=0;

        document.querySelector('#your-blackjack-result').textContent=0;
        document.querySelector('#your-blackjack-result').style.color='white';

        document.querySelector('#dealer-blackjack-result').textContent=0;
        document.querySelector('#dealer-blackjack-result').style.color='white';

        document.querySelector('#blackjack-result').textContent="Let's Play";
        document.querySelector('#blackjack-result').style.color='black';

        blackjackgame['restart']=true;

    }
    }

    function updateScore(card,activePlayer)
    {
        if(card==='A')
        {
              //if adding 11 keeps me below 21, add 11, otherwise, add 1
              if(activePlayer['score']+blackjackgame['cardsMap'][card[1]<=21])
                 {
                     activePlayer['score']+=blackjackgame['cardsMap'][card][1];
                 }

             else{
                 activePlayer['score']+=blackjackgame['cardsMap'][card][0];
                 }
        }

        else{
            activePlayer['score'] +=blackjackgame['cardsMap'][card]; //get valid from cardsMap
            }
      
    }

   
   function showScore(activePlayer)
   {
       if(activePlayer['score']>21)
    {
        document.querySelector(activePlayer['scoreSpan']).textContent='BUST'; //write the text
        document.querySelector(activePlayer['scoreSpan']).style.color='red';

    }
    else
    {
        document.querySelector(activePlayer['scoreSpan']).textContent=activePlayer['score'];
    }
       
   }

   function sleep(ms)
   {
       return new Promise(resolve=>setTimeout(resolve,ms))  //thread.sleep
   }

  async function blackjackStand()
   {
      blackjackgame['isStand']=true;
      blackjackgame['restart']=false;

      while(DEALER['score']<16&& blackjackgame['isStand']===true)
      {
        let card=randomCard();
        showCard(card,DEALER);
        updateScore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
 
      }
       
      
      blackjackgame['restart']=true;
      let winner=computerWinner();
      ShowResult(winner);
      
       
   }

   //computer winner and return who just won
   //update win draw lose

   function computerWinner()
   {
       let winner;
       
       if(YOU['score']<=21)
       {
           //condition:higher score than dealer or when dealer bust

           if(YOU['score']>DEALER['score']||(DEALER['score']>21))
           {
              blackjackgame['win']++;
               winner=YOU;
           }
           else if(YOU['score']<DEALER['score'])
           {
           
            blackjackgame['losses']++;
            winner=DEALER;
           }
           else if(YOU['score']=== DEALER['score'])
           {
         
            blackjackgame['draw']++;
    
           }

           
       }//when you bust but dealer dont
       else if(YOU['score']>21&&DEALER['score']<=21)
       {
        blackjackgame['losses']++;
           winner=DEALER;

       }//When you and dealer bust

       else if(YOU['score']>21&&DEALER['score']>21)
       {
        blackjackgame['draw']++;
       
       }

       console.log(blackjackgame);
       return winner;

      
   }

   function ShowResult(winner)
   {
       let message, messagecolor;

       if(blackjackgame['restart']===true)
       {
        if(winner===YOU)
        {   document.querySelector('#win').textContent=blackjackgame['win'];
            message='YOU WON';
            messagecolor='green';
            winSound.play();
        }
        else if(winner===DEALER)
        {
         document.querySelector('#losses').textContent=blackjackgame['losses'];
         message='YOU LOSE!';
         messagecolor='red';
         loseSound.play();
        }
        else{
         document.querySelector('#draw').textContent=blackjackgame['draw'];
         message='its DRAW!';
         messagecolor='black';
        
        }
 
        document.querySelector('#blackjack-result').textContent=message;
        document.querySelector('#blackjack-result').style.color=messagecolor;
       }
     
   }



   
   
   