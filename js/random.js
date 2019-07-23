//"use strict";


function generate() {
	let facts = [
		"The Top 10 Qualities & Characteristics Every Nurse Should Have", 
		"Be empathetic For most patients being in the hospital is a traumatic and emotional experience ...",
			"Write everything down(in detail) ...",
			"Be organized. ...",
			"Be adaptable. ...",
			"Have physical and mental endurance. ...",
			"Be a quick thinker(and have great judgement) ...",
			"Be hard - working. ...",
			"Be a good communicator."
	];

	let randomFact;
	randomFact = facts[Math.floor(Math.random() * facts.length)];

	document.write(randomFact + " <em>(paraphrased from Wikipedia)</em>");


}

generate();


