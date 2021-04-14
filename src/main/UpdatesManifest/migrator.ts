import * as schemaV1 from '../schemas/v1/Updates.schema.json';

import { UpdatesLatest } from './latest';
import { Updates as UpdatesV1 } from '../../types/v1/updates.schema';
import { assertForSchema } from '../assertion';

export const migrateUpdates = (input: Record<string, any>): UpdatesLatest => {
  if (!input.version) {
    throw new Error('version is not specified');
  }

  switch (input.version) {
    case 1:
      return assertForSchema(schemaV1)<UpdatesV1>(input);

    default:
      throw new Error('unsupported Updates Bundle Manifest version');
  }
};
