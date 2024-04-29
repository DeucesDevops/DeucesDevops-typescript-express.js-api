import crypto from 'crypto'

// secret key that will be used in the authentication process
const SECRET = "DEUCES-REST-API"

//Generating Random Bytes:
export const random = () => crypto.randomBytes(128).toString('base64')

//generate an HMAC-SHA256 authentication code based on these parameters and the secret key.
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/'))
    .update(SECRET).digest('hex')
}