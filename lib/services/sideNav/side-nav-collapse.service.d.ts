import * as i0 from "@angular/core";
export declare class SidenavService {
    private _isCollapsed;
    private _hidden;
    constructor();
    get isCollapsed(): boolean;
    get hidden(): boolean;
    toggle(): void;
    toggleHide(): void;
    collapse(): void;
    expand(): void;
    private listenToWindowResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SidenavService>;
}
