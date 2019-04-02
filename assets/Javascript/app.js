 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBugeRzVri61GeDT43ZNcEUcXVEWdgDvPo",
  authDomain: "the-train-scheduler-668e6.firebaseapp.com",
  databaseURL: "https://the-train-scheduler-668e6.firebaseio.com",
  projectId: "the-train-scheduler-668e6",
  storageBucket: "",
  messagingSenderId: "120157172436"
};
firebase.initializeApp(config);

var database = firebase.database();

//Adding new trains to the table
$("#train-name-btn").on("click", function(event) {
 //Gotta make sure we don't refresh to a blank form and such.
  event.preventDefault();


  var trainName = $("#train-name-input").val().trim();
  var destName = $("#destination-input").val().trim();
  var trainTime = moment($("#time-input").val().trim(), "h:mm a").format("HHmm");
  var frequency = $("#frequency-input").val().trim();


  var newTrain = {
    train: trainName,
    destination: destName,
    time: trainTime,
    frequent: frequency,
  };


  database.ref().push(newTrain);


  console.log(newTrain.train);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequent);

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");

});

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().train;
  var destName = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var frequency = childSnapshot.val().frequent;
})
