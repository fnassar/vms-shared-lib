import { EventEmitter } from '@angular/core';
import { ITabDropdownOption } from '../../interfaces';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class CustomSideTabsComponent {
    private sanitizer;
    tabs: ITabDropdownOption[];
    activeId: string | number;
    lang: 'en' | 'ar';
    activeIdChange: EventEmitter<string | number>;
    constructor(sanitizer: DomSanitizer);
    getSafeSvg(svg: string | undefined): SafeHtml | null;
    selectTab(tab: ITabDropdownOption): void;
    getLabel(tab: ITabDropdownOption): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomSideTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomSideTabsComponent, "custom-side-tabs", never, { "tabs": { "alias": "tabs"; "required": false; }; "activeId": { "alias": "activeId"; "required": false; }; "lang": { "alias": "lang"; "required": false; }; }, { "activeIdChange": "activeIdChange"; }, never, ["*"], true, never>;
}
