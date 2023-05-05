import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _instancesCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._instancesCount += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}