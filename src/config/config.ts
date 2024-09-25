import dotenv from 'dotenv';

dotenv.config();

export function getEnvironment(k: string): string | undefined {
    return process.env[k];
}

export function getNumberEnv(k: string): number {
    return Number(getEnvironment(k));
}