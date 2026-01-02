import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomCheckBoxComponent {
    checkboxClass: string;
    componentClass: string;
    labelClass: string;
    label: string;
    name: string;
    customId?: string;
    disabled: boolean;
    value: boolean;
    valueChange: EventEmitter<boolean>;
    uniqueId: string;
    toggleValue(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomCheckBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomCheckBoxComponent, "custom-check-box", never, { "checkboxClass": { "alias": "checkboxClass"; "required": false; }; "componentClass": { "alias": "componentClass"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "label": { "alias": "label"; "required": false; }; "name": { "alias": "name"; "required": true; }; "customId": { "alias": "customId"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
