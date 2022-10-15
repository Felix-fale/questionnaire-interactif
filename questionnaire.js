const questions = [
  {
    question:
      "A quel composition est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart",
    reponse: 2,
  },
  {
    question: "Quelle est la capitale de l'Austrlie ?\n1. Vienne\n2. Oslo",
    reponse: 1,
  },
  {
    question:
      "Quelle organe est pertubé par les acouphenes ?\n1. Les pieds\n2. Les oreilles",
    reponse: 2,
  },
];

// =============debut du jeu ===========
let nbBonneReponse = 0;

for (let i = 0; i < questions.length; i++) {
  let reponseUser = prompt(questions[i].question);
  if (reponseUser == questions[i].reponse) {
    alert("Bonne reponse");
    nbBonneReponse++;
  } else {
    alert("Mauvaise reponse");
  }
}

if (nbBonneReponse <= 1) {
  alert(`Vous avez ${nbBonneReponse} bonne reponse sur ${questions.length}`);
} else {
  alert(`Vous avez ${nbBonneReponse} bonnes reponses sur ${questions.length}`);
}
