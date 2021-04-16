import * as schemaV1 from '../../schemas/v1/bms.schema.json';

import { BmsLatest } from './latest';
import { Bms as BmsV1 } from '../../types/v1/bms.schema';
import { assertForSchema } from '../assertion';

export const migrateBms = (input: Record<string, any>): BmsLatest => {
  if (!input.version) {
    throw new Error('version is not specified');
  }

  switch (input.version) {
    case 1:
      return assertForSchema(schemaV1)<BmsV1>(input);

    // migration plan
    // case 0: {
    //   const bmsV0 = assertForSchema(schemaV0)<BmsV0>(input);
    //   return migrate(up0to1(bmsV0));
    // }

    default:
      throw new Error('unsupported Bms Bundle Manifest version');
  }
};

// migration plan
// const up0to1 = (bmsV0: BmsV0): BmsV1 => {
//   return {
//     version: 1,
//     ...and other props
//   }
// }
