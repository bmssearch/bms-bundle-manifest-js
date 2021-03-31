import * as schemaV1 from '../../schema/v1/group.json';

import { Group as GroupV1 } from '../../types/v1/group';
import { assertForSchema } from '../../utils/assertion';

export class GroupSpec {
  public static assert = (input: Record<string, any>): GroupV1 => {
    if (!input.version) {
      throw new Error('version is not specified');
    }

    switch (input.version) {
      case 1:
        return assertForSchema(schemaV1)(input);
      default:
        throw new Error('unsupported Bms Bundle Spec version');
    }
  };
}
