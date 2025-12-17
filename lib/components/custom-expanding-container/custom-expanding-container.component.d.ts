import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomExpandingContainerComponent {
    expanded: boolean;
    showIcon1: boolean;
    padding: string;
    borderRadius: string;
    backgroundColor: string;
    showBorderBottom: boolean;
    minMaxHeight: string;
    minExpandingHeight: string;
    toggled: EventEmitter<boolean>;
    isExpanded: import("@angular/core").WritableSignal<boolean>;
    minMaxHeightCss: string;
    minExpandedHeightCss: string;
    get isExpandedClass(): boolean;
    ngOnInit(): void;
    toggle(): void;
    open(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomExpandingContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomExpandingContainerComponent, "custom-expanding-container", never, { "expanded": { "alias": "expanded"; "required": false; }; "showIcon1": { "alias": "showIcon1"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "showBorderBottom": { "alias": "showBorderBottom"; "required": false; }; "minMaxHeight": { "alias": "minMaxHeight"; "required": false; }; "minExpandingHeight": { "alias": "minExpandingHeight"; "required": false; }; }, { "toggled": "toggled"; }, never, ["[target]", "[content]"], true, never>;
}
