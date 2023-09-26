export const clearTimeout = (requestTimeoutId?: number) => {
  if (requestTimeoutId) {
    window.clearTimeout(requestTimeoutId);
  }
};