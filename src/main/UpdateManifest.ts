import * as schemaV1 from '../../schema/v1/updates.json';

import { Updates as UpdatesV1 } from '../types/v1/updates.schema';
import { assertForSchema } from '../utils/assertion';

export class UpdatesManifest {
  public static assert = (input: Record<string, any>): UpdatesV1 => {
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
