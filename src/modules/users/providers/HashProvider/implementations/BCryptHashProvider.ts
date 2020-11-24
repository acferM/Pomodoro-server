import { compare, hash } from 'bcryptjs';
import IHashProvider from '../models/IHashProvider';

export default class BCryptHashProvider implements IHashProvider {
  async generateHash(payload: string): Promise<string> {
    const generatedHash = await hash(payload, 8);

    return generatedHash;
  }

  async compareHash(payload: string, hashed: string): Promise<boolean> {
    const hashMatch = await compare(payload, hashed);

    return hashMatch;
  }
}
