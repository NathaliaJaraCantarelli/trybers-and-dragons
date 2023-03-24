import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyTypes: EnergyType;
  static warriorCount = 0;
  constructor(name: string) {
    super(name);
    this._energyTypes = 'stamina';
    Warrior.warriorCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyTypes;
  }

  static createdArchetypeInstances(): number {
    return Warrior.warriorCount;
  }
}
