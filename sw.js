self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
// Kortdata og app kræver fortsat internet; ingen offline-cache i denne version.
