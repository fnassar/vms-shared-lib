import { EventEmitter } from '@angular/core';
import { CustomInputBase } from '../custom-input-base';
import * as i0 from "@angular/core";
export declare class CustomInputNumberFormComponent extends CustomInputBase {
    numberType: 'outerIncrements' | 'number' | 'outerIncBlue' | null;
    min: number;
    max: number;
    numberValueChange: EventEmitter<number>;
    ngOnInit(): void;
    showPassword: boolean;
    togglePasswordVisibility(): void;
    preventInvalidNumberInput(event: KeyboardEvent): void;
    incrementValue(): void;
    decrementValue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomInputNumberFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomInputNumberFormComponent, "custom-input-number-form", never, { "numberType": { "alias": "numberType"; "required": true; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; }, { "numberValueChange": "numberValueChange"; }, never, never, true, never>;
}
