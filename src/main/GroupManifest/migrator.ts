import * as schemaV1 from '../schemas/v1/Group.schema.json';

import { GroupLatest } from './latest';
import { Group as GroupV1 } from '../../types/v1/group.schema';
import { assertForSchema } from '../assertion';

export const migrateGroup = (input: Record<string, any>): GroupLatest => {
  if (!input.version) {
    throw new Error('version is not specified');
  }

  switch (input.version) {
    case 1:
      return assertForSchema(schemaV1)<GroupV1>(input);

    default:
      throw new Error('unsupported Group Bundle Manifest version');
  }
};
