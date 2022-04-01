importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
// sw.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'chillaso.github.io',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// default to `networkFirst` strategy
workbox.routing.setDefaultHandler(workbox.strategies.networkFirst());

// let Workbox handle our precache list
// NOTE: This will be populated by jekyll-workbox-plugin.
workbox.precaching.precacheAndRoute([{"url":"/index.html","revision":"b1c5f91cd2867c6440b8bd084afc6f7a"},{"url":"/about/","revision":"9f04f95652ae1b6bed118d34755fc478"},{"url":"/contact/","revision":"9f04f95652ae1b6bed118d34755fc478"},{"url":"/sls-telegram-bot/","revision":"4c6b2a3d339551c81bc6d8f8e6928c27"},{"url":"/kotlin-spring-restful/","revision":"142dea5f46f640d3834a5f51a04890da"},{"url":"/how-to-build-this-web/","revision":"dbe0b4fc3c5f471c4d4c8abf5767a0e9"}]);

// use `Stale-while-revalidate` strategy for images and fonts.
workbox.routing.registerRoute(
    /images/,
    workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
    /^https?:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate()
);
