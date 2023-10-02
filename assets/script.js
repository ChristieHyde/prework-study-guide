var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

/* Lists the study topics in the console */
function listTopics() {
    for (var i = 0; i < topics.length; i++) {
      console.log(topics[i]);
    }
  }

/* Displays the randomised topic in the console */
function selectTopic(topic) {
    if (topic === 'HTML') {
        console.log("Let's study HTML!");
       } else if (topic === 'CSS') {
        console.log("Let's study CSS!");
       } else if (topic === 'Git') {
        console.log("Let's study Git!");
       } else if (topic === 'JavaScript') {
        console.log("Let's study JavaScript!");
       } else {
        console.log('Please try again!');
       }
}

/* Main */
console.log("Here are the topics we learned through Prework:");
listTopics();
console.log("Which topic should we study first?");
selectTopic(randomTopic);