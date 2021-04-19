import { UpdatesLatest } from './latest';
import { migrateUpdates } from './migrator';

export class UpdatesManifestHelper {
  public static cast = (input: Record<string, any>): UpdatesLatest => {
    return migrateUpdates(input);
  };
}
