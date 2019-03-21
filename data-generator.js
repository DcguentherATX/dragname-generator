//create object on window
window.streams = {};




var getName = function() {
  return randomName();
}
//grabs randomized index
var random = function(array) {
	var index = Math.floor(Math.random() * array.length)
    return array[index];
}
//name options:
var firstName = ['Alotta', 'Anita', 'Juwanna', 'Taryn', 'Jasmine', 'Persimmon', 'Credenza', 'Esperanza', 'Becky', 'Lucille', 'Phara', 'Hedda', 'Freida', 'Malestia', 'Penny', 'Barbara', 'Nadja', 'Tasha', 'Jenna'];
var lastName = ['Cox', 'Minj', 'Clementine', 'Boxx', 'Dix', 'Sweats', 'the Drag Queen', 'Slaves', 'Childs', 'Tration', 'Tentiary', 'Ghanoush', 'Salad', 'Tailya', 'Mann', 'Tention', 'Fajina'];

//generate random name
var randomName = function() {
  var name = {};
  return [random(firstName), random(lastName)].join(' '); 
}