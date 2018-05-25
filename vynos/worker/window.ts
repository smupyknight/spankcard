export function isServiceWorker(w: any): w is ServiceWorkerGlobalScope {
  return true
}

export function asServiceWorker(fn: (w: ServiceWorkerGlobalScope) => void) {
  if (isServiceWorker(self)) fn(self)
}
