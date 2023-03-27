// import Fighter from '../Fighter';
// import Battle from './Battle';

// export default class PVP extends Battle {
//   private _characterOne: Fighter;
//   private _characterTwo: Fighter;
//   constructor(characterOne: Fighter, characterTwo: Fighter) {
//     super(characterOne);
//     this._characterOne = characterOne;
//     this._characterTwo = characterTwo;
//   }

//   fight(): number {
//     while ((this._characterOne.lifePoints
//         && this._characterTwo.lifePoints) > 0) {    
//       this._characterTwo.attack(this._characterOne);
//       this._characterOne.attack(this._characterTwo);
//     }

//     return this._characterOne.lifePoints === -1 ? -1 : 1;
//   }
// }