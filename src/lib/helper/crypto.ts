import crypto from 'crypto'

export function generateApiKey(length = 32) {
  // Generate a random string of the specified length
  return crypto.randomBytes(length).toString('hex');
}