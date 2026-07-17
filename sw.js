// 스웦(SPACEWARP) 최소 서비스워커
// - PWA "홈 화면에 추가" 설치 요건을 충족시키기 위한 최소 구성입니다.
// - 별도의 오프라인 캐싱 전략 없이, 요청을 그대로 네트워크로 흘려보냅니다.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // 캐싱 없이 항상 네트워크로 통과 (추후 오프라인 지원 원하시면 여기에 캐시 전략 추가 가능)
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
