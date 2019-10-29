$(document).ready(function(){
  var score = 0;
  $("form#fortune_survey").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=fortune-survey]:checked").each(function() {
      score += 1;
    });

    $("input:checkbox[name=survey]:checked").each(function() {
      score += 1;
    });

  if (score < 4) {
    alert("you will have 8 children")
  }

  if (score >= 4 && score <= 7) {
    alert("you will be rich")
  } else if (score > 7) {
    alert("you will own a farm")
  }
});
});
