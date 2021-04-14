import { BmsLatest } from './latest';
import { migrateBms } from './migrator';

export class BmsManifest {
  public static cast = (input: Record<string, any>): BmsLatest => {
    return migrateBms(input);
  };
}
