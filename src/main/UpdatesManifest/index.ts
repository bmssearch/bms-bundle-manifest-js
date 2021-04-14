import { UpdatesLatest } from './latest';
import { migrateUpdates } from './migrator';

export class UpdatesManifest {
  public static cast = (input: Record<string, any>): UpdatesLatest => {
    return migrateUpdates(input);
  };
}
