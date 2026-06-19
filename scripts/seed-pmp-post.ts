import { db } from "../src/lib/db";
import { seedPmpPost } from "../src/lib/seed-pmp-post";

async function main() {
  await seedPmpPost(db);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
