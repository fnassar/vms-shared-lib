import { ElementRef, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { IDropdownOption } from '../../interfaces';
import { CustomInputBase } from '../custom-input-form/custom-input-base';
import { TranslationService } from '../../services';
import * as i0 from "@angular/core";
interface IPageSearch {
    nameEn: string;
    nameAr: string;
    size: number;
    page: number;
}
export declare class CustomInputSearchFormComponent<T extends IDropdownOption = IDropdownOption> extends CustomInputBase implements OnInit {
    toggleSearch: boolean;
    dropdownTemplate: TemplateRef<{
        $implicit: any;
    }>;
    inputElement?: ElementRef<HTMLInputElement>;
    dropdownOptionsElement?: ElementRef<HTMLDivElement>;
    options: import("@angular/core").InputSignal<T[]>;
    totalSearchOptions: import("@angular/core").InputSignal<number>;
    pageSearch: import("@angular/core").WritableSignal<IPageSearch>;
    optionSelected: EventEmitter<T>;
    viewMoreClicked: EventEmitter<IPageSearch>;
    searching: import("@angular/core").WritableSignal<boolean>;
    allowSearch: import("@angular/core").WritableSignal<boolean>;
    selectedOption: import("@angular/core").WritableSignal<T | null>;
    private inputSubject;
    translationService: TranslationService;
    private uniqueId;
    constructor();
    ngOnInit(): void;
    get inputId(): string;
    onKeyDown(event: KeyboardEvent): void;
    onInput(): void;
    toggleAllowSearch(): void;
    closeDropdown(): void;
    openDropdown(): void;
    get clickOutsideElements(): HTMLElement[];
    get filteredOptions(): T[];
    selectOption(option: T): void;
    loadMore(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomInputSearchFormComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomInputSearchFormComponent<any>, "custom-input-search-form", never, { "toggleSearch": { "alias": "toggleSearch"; "required": true; }; "dropdownTemplate": { "alias": "dropdownTemplate"; "required": false; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; "totalSearchOptions": { "alias": "totalSearchOptions"; "required": false; "isSignal": true; }; }, { "optionSelected": "optionSelected"; "viewMoreClicked": "viewMoreClicked"; }, never, never, true, never>;
}
export {};
