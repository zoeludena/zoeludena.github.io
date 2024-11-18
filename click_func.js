
var exp = 1;
showExp(exp);

function currentExp(n) {
  showExp((exp = n));
}

function showExp(n) {
  var activity = document.getElementsByClassName("activity");
  var cur_exp = document.getElementsByClassName("experience");
  for (i = 0; i < activity.length; i++) {
    activity[i].className = "activity activities-hide";
    console.log(i, activity[i].className);
  }
  for (i = 0; i < cur_exp.length; i++) {
    cur_exp[i].className = cur_exp[i].className.replace(
      "activities-button-focus",
      "activities-button"
    );
  }
  activity[n - 1].className = "activity activities-show";
  cur_exp[n - 1].className = "activities-button-focus experience";
}