// Environments variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      APP_PORT: number;
      DB_NAME: string;
      DB_USER: string;
      DB_PASSWORD: string;
      SECRET_API_KEY: string;
    }
  }
}

export {}