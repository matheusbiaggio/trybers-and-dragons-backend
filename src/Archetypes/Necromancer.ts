import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _instancesCount = 0; 
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}