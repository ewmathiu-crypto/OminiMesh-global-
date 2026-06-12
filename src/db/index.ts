import { createDatabase } from "@kilocode/app-builder-db";
import * as schema from "./schema";

const hasDbConfig = Boolean(process.env.KILO_DB_URL || process.env.DB_URL);

const raw = hasDbConfig
  ? createDatabase(schema)
  : ({} as unknown as ReturnType<typeof createDatabase>);

export const db = raw;
export default raw;
