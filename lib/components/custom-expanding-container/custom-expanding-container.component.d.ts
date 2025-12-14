import * as i0 from "@angular/core";
export declare class CustomExpandingContainerComponent {
    expanded: boolean;
    showIcon1: boolean;
    padding: string;
    borderRadius: string;
    backgroundColor: string;
    showBorderBottom: boolean;
    isExpanded: import("@angular/core").WritableSignal<boolean>;
    ngOnInit(): void;
    toggle(): void;
    open(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomExpandingContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomExpandingContainerComponent, "custom-expanding-container", never, { "expanded": { "alias": "expanded"; "required": false; }; "showIcon1": { "alias": "showIcon1"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "showBorderBottom": { "alias": "showBorderBottom"; "required": false; }; }, {}, never, ["[target]", "[content]"], true, never>;
}
