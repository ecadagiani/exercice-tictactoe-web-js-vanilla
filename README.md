# TicTacToe O'Clock

Ce projet est un petit exercice pour découvrir le Javascript.
Tu devras compléter une fonction afin de faire fonctionner un TicTacToe.

## Installation
Pour installer/démarrer le projet, tu peux exécuter les commandes suivantes :
`npm install` puis `npm start`.

Le jeu sera ensuite accessible sur l'url : http://localhost:8080

À chaque modification sur le projet, 
il te faudra **recharger la page** pour pouvoir voir les effets de tes modifications.


## Exercice
Dans le fichier `src/to_complete.js` :

Tu pourras compléter la fonction `processTicTacToe( row, column )`.

- **Appel**: processTicTacToe est appelée à chaque clic sur une case.
- **Arguments**: la fonction reçoit en argument le numéro de ligne et de colonne de la case cliquée, 
  ⚠️ les lignes et les colonnes commencent à 0.
- **Retour**: La fonction doit renvoyer la nouvelle grille. 
  Celle-ci est un tableau à double entrée, de 3 sur 3. 
  Lorsqu'une case est vide elle doit valoir `false`.
  Lorsqu'elle est pleine elle contient soit `"CROSS"` pour une croix, soit `"ROUND"` pour un rond.
  
  Exemple : 
```javascript
[
    [false, false, false],
    [false, "CROSS", false],
    [false, false, "ROUND"]
];
```

## Objectifs
1. Le jeu doit être jouable : à chaque clic sur une case vide on doit 
   afficher une croix ou un rond, en alternant les tours.
2. Il faudra également vérifier si la partie est gagnée ou en égalité. 
Pour afficher la victoire ou l'égalité tu pourras utiliser la fonction `alert`, exemple :
```javascript
alert("C'est gagné");
```

---
Pour l'exercice tu peux te servir d'internet, et / ou de ce cheatSheet
https://gist.github.com/ecadagiani/f43f50533721bc71fb1864a4b9fa0037
