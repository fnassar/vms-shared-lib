import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AuthService, SidenavService } from '../../../../services';
import * as i0 from "@angular/core";
export declare class CustomNavBarComponent {
    sidenav: SidenavService;
    private authService;
    private sanitizer;
    readonly logoSvg: SafeHtml;
    readonly collapsedLogoSvg: SafeHtml;
    readonly logoutIconSvg: SafeHtml;
    constructor(sidenav: SidenavService, authService: AuthService, sanitizer: DomSanitizer);
    get isRTL(): boolean;
    logout(): void;
    hide(): void;
    closeSidenavOnClickOutside(): void;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomNavBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomNavBarComponent, "app-custom-nav-bar", never, {}, {}, never, never, true, never>;
}
