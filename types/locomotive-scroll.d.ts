declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    multiplier?: number;
    lerp?: number;
    smartphone?: {
      smooth?: boolean;
    };
    tablet?: {
      smooth?: boolean;
    };
    [key: string]: any;
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    destroy(): void;
    update(): void;
    stop(): void;
    start(): void;
    scrollTo(target: string | HTMLElement, options?: any): void;
  }
} 