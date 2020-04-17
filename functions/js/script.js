var main_question = prompt("What is day today?", "monday");
var second_question = prompt("Is now quarantine period or not?", "Yes");
function Week(day) {
  if (day == "monday" || day == "wednesday" || day == "friday") {
     odd_work_days();
  }
  else if (day == "tuesday") {
    Tuesday (second_question);
  }
  else if (day == "thursday") {
     Thursday (second_question);
  }
  else if (day == "saturday") {
     Saturday (second_question);
  }
  else if (day == "sunday") {
    Sunday (second_question);
  }
}
function odd_work_days () {
    var schedule = ["Wake up at 7", "Prepare to go at work", "Spend 9 hours at work", "Have a dinner" , "Course time", "English course", "Do home exercises", "Sleep"]; // schedule for quarantine period
    for (var i = 0; i<schedule.length; i++) {
      console.log(schedule[i]);
    }
}
function Tuesday (quarantine) {
  if (quarantine == "Yes") {
    var q_schedule = ["Wake up at 9", "Have a breakfast", "Do all homework for today", "Have a lunch" ,"Learn something new about programming", "Have a dinner" , "Course time", "English course", "HAve a rest", "Sleep"]; // schedule for quarantine period
    for (var i = 0; i<q_schedule.length; i++) {
      console.log(q_schedule[i]);
    }
  }
  else{
  var u_schedule = ["Wake up at 7", "Prepare to go at work", "Spend 9 hours at work", "Have a dinner" , "Course time", "English course", "Do home exercises", "Sleep"]; // schedule for usual days
  for (var i = 0; i<u_schedule.length; i++) {
      console.log(u_schedule[i]);
    }
  }

}

function Thursday (quarantine) {
  if (quarantine == "Yes") {
    var q_schedule = ["Wake up at 9", "Have a breakfast", "Do all homework for today", "Have a lunch" ,"Learn something new about programming", "Have a dinner" , "Course time", "English course", "HAve a rest", "Sleep"]; // schedule for quarantine period
     for (var i = 0; i<q_schedule.length; i++) {
      console.log(q_schedule[i]);
    }
  }
  else{
    var u_schedule = ["Wake up at 7", "Prepare to go at work", "Spend 9 hours at work", "Have a dinner" , "Course time", "English course", "Do home exercises", "Sleep"]; // schedule for usual days
    for (var i = 0; i<u_schedule.length; i++) {
      console.log(u_schedule[i]);
    }
  }

}

function Saturday (quarantine) {
  if (quarantine == "Yes") {
    var q_schedule = ["Wake up at 11", "Have a breakfast", "Do all homework for Monday", "Have a lunch" ,"Learn something new about programming", "Have a dinner" , "Mentor time", "English course", "HAve a rest", "Sleep"]; // schedule for quarantine period
    for (var i = 0; i<q_schedule.length; i++) {
      console.log(q_schedule[i]);
    }
  }
  else{
    var u_schedule = ["Wake up at 7", "Prepare to go at work", "Spend 5 hours at work", "Have a lunch" , "Mentor time", "English course", "Have a rest", "Sleep"]; // schedule for usual days
    for (var i = 0; i<u_schedule.length; i++) {
      console.log(u_schedule[i]);
    }
  }

}
function Sunday (quarantine) {
  if (quarantine == "Yes") {
    var q_schedule = ["Wake up at 11", "Have a breakfast", "Solve problems using programming language", "Have a lunch" ,"Learn something new about programming", "Have a dinner", "HAve a rest", "Sleep"]; // schedule for quarantine period
    for (var i = 0; i<q_schedule.length; i++) {
      console.log(q_schedule[i]);
    }
  }
  else{
    var u_schedule = ["Wake up at 11", "Have a breakfast", "Do all homework for Monday", "Have a lunch" ,"Learn something new about programming", "Have a dinner",  "HAve a rest", "Sleep"]; // schedule for usual days
    for (var i = 0; i<u_schedule.length; i++) {
      console.log(u_schedule[i]);
    }
  }

}
Week(main_question);
