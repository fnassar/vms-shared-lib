import { CustomInputBase } from '../custom-input-base';
import * as i0 from "@angular/core";
export declare class CustomPlateNumberInputComponent extends CustomInputBase {
    maxLetters: number;
    maxDigits: number;
    placeholderLetters: string;
    placeholderDigits: string;
    lettersValue: string;
    digitsValue: string;
    ngOnInit(): void;
    splitPlateNumber(value: string): void;
    onLettersInput(event: Event): void;
    onDigitsInput(event: Event): void;
    preventInvalidInput(event: KeyboardEvent, type: 'letters' | 'digits'): void;
    isControlKey(event: KeyboardEvent): boolean;
    updateFormValue(): void;
    getCombinedValue(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomPlateNumberInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomPlateNumberInputComponent, "custom-plate-number-input", never, { "maxLetters": { "alias": "maxLetters"; "required": false; }; "maxDigits": { "alias": "maxDigits"; "required": false; }; "placeholderLetters": { "alias": "placeholderLetters"; "required": false; }; "placeholderDigits": { "alias": "placeholderDigits"; "required": false; }; }, {}, never, never, true, never>;
}
