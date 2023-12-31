const subjects = ['cat', 'dog', 'dr mario', 'broccoli', 'treabie', 'lightbulb'];
const actions = ['whispering', 'stinking', 'dancing', 'coding', ' drinking', 'eating', 'pooping', 'eating dirt', 'surfing'];
const conditions = ['it started raining', 'the sun set', 'the moon appeared', 'the flower bloomed'];
const punchlines = ["It wanted to join the dance party!", "They were having a secret meeting!", "It performs a happy dance!", "It couldn't resist the karaoke session!", "Its code had a bug!"];

let number = Math.floor(Math.random() * 2);

if (number == 0){
    console.log("What did the " + subjects[Math.floor(Math.random() * 6)] + " say to the " + subjects[Math.floor(Math.random() * 6)] + " when " + conditions[Math.floor(Math.random() * 4)]);
    console.log(punchlines[Math.floor(Math.random() * 4)]);
}
else if(number == 1){
    console.log("Did you here about the " + subjects[Math.floor(Math.random() * 6)] + " that was caught " + actions[Math.floor(Math.random()* 7)]);
    console.log(punchlines[Math.floor(Math.random() * 4)]);

}



/*"Why did the %s %s when %s?",
"What did the %s say to the %s while %s?",
"How does a %s react when %s?",
"Did you hear about the %s that was caught %s because %s?"
*/