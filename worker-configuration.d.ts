// Worker configuration types
declare global {
  interface Env {
    // Add your environment variables here
    // Example: DATABASE_URL: string;
  }
  
  const SELF: ServiceWorkerGlobalScope;
}

export {};