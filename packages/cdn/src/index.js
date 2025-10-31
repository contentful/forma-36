/// <reference types="@fastly/js-compute" />
import { getServer } from '../static-publisher/statics.js';
const staticContentServer = getServer();

addEventListener('fetch', (event) => event.respondWith(handleRequest(event)));
async function handleRequest(event) {
  const response = await staticContentServer.serveRequest(event.request);
  if (response != null) {
    response.headers.append('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS');
    response.headers.append('Access-Control-Allow-Origin', '*');
    return response;
  }

  // Do custom things here!
  // Handle API requests, serve non-static responses, etc.

  return new Response('Not found', { status: 404 });
}
