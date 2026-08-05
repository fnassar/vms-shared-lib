import { EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CustomTimeBaseComponent } from './custom-time-base';
import * as i0 from "@angular/core";
export declare class CustomTimeInputComponent extends CustomTimeBaseComponent implements OnInit, OnChanges {
    value: string | null;
    valueChange: EventEmitter<string | null>;
    label: string;
    labelClass: string;
    inputClass: string;
    height: string;
    rangeMin: string;
    rangeMax: string;
    required: boolean;
    defaultTime: string;
    private translate;
    dropdownOpen: import("@angular/core").WritableSignal<boolean>;
    /**
     * Last confirmed time ("HH:MM:00"). The form variant reads the form control
     * for this; here the parent is not guaranteed to bind the emitted value back,
     * so the confirmed time is kept locally. The field renders from this instead
     * of from the live wheel state, so it does not churn on every scroll tick.
     */
    private confirmedTime;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    toggleDropdown(): void;
    confirmTime(): void;
    displayTime(): string;
    private clearSelection;
    /** Current selection as the "HH:MM:00" 24h string emitted to the parent. */
    private buildTimeString;
    private setFromValue;
    private isTimeInRange;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTimeInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomTimeInputComponent, "custom-time-input", never, { "value": { "alias": "value"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "inputClass": { "alias": "inputClass"; "required": false; }; "height": { "alias": "height"; "required": false; }; "rangeMin": { "alias": "rangeMin"; "required": false; }; "rangeMax": { "alias": "rangeMax"; "required": false; }; "required": { "alias": "required"; "required": false; }; "defaultTime": { "alias": "defaultTime"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
