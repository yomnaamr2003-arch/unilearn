const BASE_URL = 'https://6aaed711606bd915d11115c8.mockapi.io/courses';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cleanup() {
  console.log('Fetching all records...');
  const res = await fetch(BASE_URL);
  const all = await res.json();
  console.log(`Found ${all.length} total records.`);

  const placeholders = all.filter((c) => /^title \d+$/.test(c.title || ''));
  console.log(`Found ${placeholders.length} placeholder records to delete.`);

  for (const record of placeholders) {
    try {
      const delRes = await fetch(`${BASE_URL}/${record.id}`, { method: 'DELETE' });
      if (delRes.ok) {
        console.log(`Deleted placeholder id ${record.id}`);
      } else {
        console.error(`Failed to delete id ${record.id}: ${delRes.status}`);
      }
    } catch (err) {
      console.error(`Network error deleting id ${record.id}:`, err.message);
    }
    await delay(400);
  }

  console.log('Cleanup complete.');
}

cleanup();