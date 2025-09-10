/**
 * reportWebVitals: Lazily import web-vitals and report metrics to a callback.
 * Usage: pass a function (e.g., `console.log`) to receive metrics.
 * Note: This import is dynamic to avoid increasing the main bundle size.
 * @param {(metric: any) => void} onPerfEntry - callback to receive metrics
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
