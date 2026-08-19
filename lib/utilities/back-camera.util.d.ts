export type BackCameraSupport = 'unknown' | 'available' | 'unavailable';
export declare const backCameraSupport: import("@angular/core").Signal<BackCameraSupport>;
export declare function hasBackCamera(): boolean;
export declare function detectBackCamera(): Promise<BackCameraSupport>;
export declare function watchBackCamera(onChange?: (support: BackCameraSupport) => void): () => void;
