import type { Techno } from '@specs';

export type InferenceFunction = (path: string) => Promise<Techno[]>;
