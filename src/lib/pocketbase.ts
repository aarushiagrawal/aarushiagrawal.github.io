import PocketBase from 'pocketbase';

// import.meta.env is how Astro reads the .env file
export const pb = new PocketBase(import.meta.env.PUBLIC_POCKETBASE_URL);