import * as i0 from "@angular/core";
export declare class SidenavService {
    private _isCollapsed;
    private _hidden;
    private _isMobileView;
    constructor();
    get isCollapsed(): boolean;
    get hidden(): boolean;
    get isMobileView(): boolean;
    toggle(): void;
    toggleHide(): void;
    hide(): void;
    collapse(): void;
    expand(): void;
    private listenToWindowResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SidenavService>;
}
