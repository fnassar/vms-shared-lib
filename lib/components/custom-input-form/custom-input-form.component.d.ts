import { CustomInputBase } from './custom-input-base';
import * as i0 from "@angular/core";
export declare class CustomInputFormComponent extends CustomInputBase {
    numberType: 'currency' | 'time' | 'discount' | null;
    time: boolean;
    showPassword: boolean;
    togglePasswordVisibility(): void;
    preventInvalidNumberInput(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomInputFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomInputFormComponent, "custom-input-form", never, { "numberType": { "alias": "numberType"; "required": false; }; "time": { "alias": "time"; "required": false; }; }, {}, never, never, true, never>;
}
