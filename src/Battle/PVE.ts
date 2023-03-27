import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _characterFighter: Fighter;
  private _monsters: Fighter[] | SimpleFighter[];
  constructor(
    characterFighter: Fighter,
    monsters: Fighter[] | SimpleFighter[],
  ) {
    super(characterFighter);
    this._characterFighter = characterFighter;
    this._monsters = monsters;
  }

  monstersLifePonints(): boolean {
    return this._monsters.some((monster) => monster.lifePoints > 0);
  }

  fight(): number {
    while (this._characterFighter.lifePoints > 0) {
      if (!this.monstersLifePonints()) break;
      this._monsters.forEach((monster) => {
        this._characterFighter.attack(monster);
        monster.attack(this._characterFighter);
      });
    }
    return this._characterFighter.lifePoints === -1 ? -1 : 1;
  }
}