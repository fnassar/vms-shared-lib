import { EventEmitter } from '@angular/core';
import { LoadingService } from '../../services';
import * as i0 from "@angular/core";
export type ConfirmType = 'confirmation' | 'notifcation';
export type ConfirmResult = 'confirm' | 'cancel' | 'close';
export interface ConfirmOptions {
    modalText: string;
    modalSubText?: string;
    modalExtraText?: string;
    modalIcon: string;
    type: ConfirmType;
    confirmButtonText?: string;
    confirmButtonStyle?: string;
    cancelButtonText?: string;
    cancelButtonStyle?: string;
}
export declare class CustomConfirmPopupComponent {
    loadingService: LoadingService;
    modalText: string;
    type: ConfirmType;
    modalIcon: string;
    modalIconClass: string;
    modalSubText: string;
    modalExtraText: string;
    confirmButtonText: string;
    confirmButtonStyle: string;
    cancelButtonStyle: string;
    cancelButtonText: string;
    confirmEvent: EventEmitter<any>;
    cancelEvent: EventEmitter<void>;
    closeEvent: EventEmitter<void>;
    overlayClicked: EventEmitter<boolean>;
    successMsg: import("@angular/core").InputSignal<string>;
    successPressed: boolean;
    isVisible: boolean;
    eventVal: any;
    closed: EventEmitter<void>;
    constructor(loadingService: LoadingService);
    open(event?: any): void;
    close(): void;
    checkSuccess(): void;
    onOverlayClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomConfirmPopupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomConfirmPopupComponent, "custom-confirm-popup", never, { "modalText": { "alias": "modalText"; "required": true; }; "type": { "alias": "type"; "required": true; }; "modalIcon": { "alias": "modalIcon"; "required": false; }; "modalIconClass": { "alias": "modalIconClass"; "required": false; }; "modalSubText": { "alias": "modalSubText"; "required": false; }; "modalExtraText": { "alias": "modalExtraText"; "required": false; }; "confirmButtonText": { "alias": "confirmButtonText"; "required": false; }; "confirmButtonStyle": { "alias": "confirmButtonStyle"; "required": false; }; "cancelButtonStyle": { "alias": "cancelButtonStyle"; "required": false; }; "cancelButtonText": { "alias": "cancelButtonText"; "required": false; }; "successMsg": { "alias": "successMsg"; "required": false; "isSignal": true; }; }, { "confirmEvent": "confirmEvent"; "cancelEvent": "cancelEvent"; "closeEvent": "closeEvent"; "overlayClicked": "overlayClicked"; "closed": "closed"; }, never, never, true, never>;
}
