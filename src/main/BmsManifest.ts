import * as schemaV1 from '../../schema/v1/bms.json';

import { Bms as BmsV1 } from '../types/v1/bms.schema';
import { assertForSchema } from '../utils/assertion';

export class BmsManifest {
  public static assert = (input: Record<string, any>): BmsV1 => {
    if (!input.version) {
      throw new Error('version is not specified');
    }

    switch (input.version) {
      case 1:
        return assertForSchema(schemaV1)(input);
      default:
        throw new Error('unsupported Bms Bundle Manifest version');
    }
  };
}
