
var i =0;
var quiz1;
var firstname;
var userAnswers = []; 
var questionAnswers = [];
    




$(document).ready(function(){
    
    $.getJSON("Quiz2.json",function(result){
            quiz1=result;
    });
  
   
 
    
   // $("h1").text("Quiz - "+quiz1.name);

    $('.quiz').hide();
    $('.grade').hide();
   //$("h1").text("Quiz - "+quiz1.name);
   
     $(".start").on("click", function(){
         
         //console.log(quiz1.name);
        $('.hello').hide();
         $('.quiz').show();
         $('.previous').hide();
          firstname = $('.FirstName').val();

          var qCount = firstname + ', you are on question '+(1+i)+' out of '+quiz1.questions.length;
          $("h2").text(qCount);
          $(".question").text(quiz1.questions[i].question);  

          var form1 = $('<form class="radioAnswers" action=""></form>');
          $('span').append(form1);
          $(".start").remove();


          for( var j=0; j<quiz1.questions[i].choices.length; j++){
            var a = quiz1.questions[i].choices[j];
            var answer = $('<input type="radio" name="answers" value="'+j+'" id="radio'+j+'"><label for="radio'+j+'">'+a+'</label><br class="br">');
            $(".radioAnswers").append(answer);
         }

  });
   
      $(".next").on("click", function(){
          $('.previous').show();
          
          if($('.next').text()==="SUBMIT"){
              $('.quiz').hide();
              $('.grade').show();
              var correct=0;
               for(var q=0;q<quiz1.questions.length;q++){
                
                var outputQ="<p>"+(q+1)+") "+quiz1.questions[q].question+"</p>";   
                if(userAnswers[q]==quiz1.questions[q].correctAnswer){  
                    outputQ+="<p id='correct'>correct</p>";
                    correct++;
                }
                else outputQ+="<p id='incorrect'>incorrect</p>";
                   
                $('.breakdown').append(outputQ);
               }
              var correctPercent = (correct/quiz1.questions.length*100);
              var message = firstname+", you scored "+correctPercent+"% correct!";
              $("h2").text(message);
              
             $('canvas').drawRect({
              fillStyle: '#0000FF',
              x: 25, y: 100-(correctPercent)+10,
              width: 25,
              height: (correctPercent),
              fromCenter: false

            });
            $('canvas').drawRect({
              fillStyle: '#FF0000',
              x: 150, y: correctPercent+10,
              width: 25,
              height: (100-correctPercent),
              fromCenter: false

            });
              
              
              
          }else{
          var ans = jQuery( 'input[name=answers]:checked' ).val();   
          
           if (ans != null){
              userAnswers[i]=ans;
               questionAnswers[i]=quiz1.questions[i].correctAnswer;
              if(i<quiz1.questions.length-1) i++;
              var qCount = firstname + ', you are on question '+(1+i)+' out of '+quiz1.questions.length;
              $("h2").text(qCount);
              $(".question").text(quiz1.questions[i].question);  

              var form1 = $('<form class="radioAnswers" action=""></form>');
              $('span').append(form1);
              $(".start").remove();


              for( var j=0; j<quiz1.questions[i].choices.length; j++){
                var a = quiz1.questions[i].choices[j];
                var answer = $('<input type="radio" name="answers" value="'+j+'" id="radio'+j+'"><label for="radio'+j+'">'+a+'</label><br class="br">');
                $(".radioAnswers").append(answer);
             }
             if (userAnswers[i]!=null) $("#radio"+userAnswers[i]).prop("checked", true);

          }//answer != null
          }
          if(i==quiz1.questions.length-1){
              $('.next').text("SUBMIT");
          }
          else $('.next').text("next");

     
          
  });
    
    $(".previous").on("click", function(){
          
          var ans = jQuery( 'input[name=answers]:checked' ).val();   
          
           if (ans != null){
              userAnswers[i]=ans;
              questionAnswers[i]=quiz1.questions[i].correctAnswer;

              if(i>0) i--;
              if (i==0) $('.previous').hide();

              var qCount = firstname + ', you are on question '+(1+i)+' out of '+quiz1.questions.length;
              $("h2").text(qCount);
              $(".question").text(quiz1.questions[i].question);  

              var form1 = $('<form class="radioAnswers" action=""></form>');
              $('span').append(form1);

              for( var j=0; j<quiz1.questions[i].choices.length; j++){
                var a = quiz1.questions[i].choices[j];
                var answer = $('<input type="radio" name="answers" value="'+j+'" id="radio'+j+'"><label for="radio'+j+'">'+a+'</label><br class="br">');
                $(".radioAnswers").append(answer);
             }
               $("#radio"+userAnswers[i]).prop("checked", true);
               //alert(userAnswers);
          }//answer != null
          
  });
});
 
