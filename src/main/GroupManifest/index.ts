import { GroupLatest } from './latest';
import { migrateGroup } from './migrator';

export class GroupManifest {
  public static cast = (input: Record<string, any>): GroupLatest => {
    return migrateGroup(input);
  };
}
