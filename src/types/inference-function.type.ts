import { Techno } from '../specs/technos';

export type InferenceFunction = (path: string) => Promise<Array<Techno>>;
