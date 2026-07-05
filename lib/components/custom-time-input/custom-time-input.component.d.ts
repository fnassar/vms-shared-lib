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
    timeChange: EventEmitter<{
        hour: number;
        minute: number;
    }>;
    private translate;
    dropdownOpen: import("@angular/core").WritableSignal<boolean>;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    toggleDropdown(): void;
    onHourChange(): void;
    confirmTime(): void;
    displayTime(): string;
    private setFromValue;
    private isTimeInRange;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTimeInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomTimeInputComponent, "custom-time-input", never, { "value": { "alias": "value"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "inputClass": { "alias": "inputClass"; "required": false; }; "height": { "alias": "height"; "required": false; }; "rangeMin": { "alias": "rangeMin"; "required": false; }; "rangeMax": { "alias": "rangeMax"; "required": false; }; "required": { "alias": "required"; "required": false; }; "defaultTime": { "alias": "defaultTime"; "required": false; }; }, { "valueChange": "valueChange"; "timeChange": "timeChange"; }, never, never, true, never>;
}
