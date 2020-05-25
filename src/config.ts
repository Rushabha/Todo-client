// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'ra94qta4f3';
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'rj445.auth0.com',            // Auth0 domain
  clientId: 'ikULvsO4WaVJyL3nF2nGC5IjMIXbCHgk',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
