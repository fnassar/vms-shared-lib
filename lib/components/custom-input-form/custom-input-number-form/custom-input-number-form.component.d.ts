import { EventEmitter, SimpleChanges } from '@angular/core';
import { CustomInputBase } from '../custom-input-base';
import * as i0 from "@angular/core";
export declare class CustomInputNumberFormComponent extends CustomInputBase {
    private _toast;
    numberType: 'outerIncrements' | 'number' | 'outerIncBlue' | null;
    min: number;
    max: number;
    typeName: string;
    fontSize: string;
    width: string;
    numberValueChange: EventEmitter<number>;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    showPassword: boolean;
    togglePasswordVisibility(): void;
    preventInvalidNumberInput(event: KeyboardEvent): void;
    handlePaste(event: ClipboardEvent): void;
    incrementValue(): void;
    decrementValue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomInputNumberFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomInputNumberFormComponent, "custom-input-number-form", never, { "numberType": { "alias": "numberType"; "required": true; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "typeName": { "alias": "typeName"; "required": false; }; "fontSize": { "alias": "fontSize"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, { "numberValueChange": "numberValueChange"; }, never, never, true, never>;
}
