// jest.setup.js
import '@testing-library/jest-dom'

// Mock IntersectionObserver
class IntersectionObserverMock {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }
  observe(target) {
    // Simulate element being in view
    this.callback([{ isIntersecting: true, target }], this);
  }
  unobserve(target) {}
  disconnect() {}
}

global.IntersectionObserver = IntersectionObserverMock;
