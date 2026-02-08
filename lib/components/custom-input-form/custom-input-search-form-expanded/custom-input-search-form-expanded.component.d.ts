import { ElementRef, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { IDropdownOption } from '../../../interfaces';
import { CustomInputBase } from '../custom-input-base';
import { LoadingService, TranslationService } from '../../../services';
import * as i0 from "@angular/core";
interface IPageSearch {
    nameEn: string;
    nameAr: string;
    size: number;
    page: number;
}
export declare class CustomInputSearchFormExpandedComponent<T extends IDropdownOption = IDropdownOption> extends CustomInputBase implements OnInit {
    dropdownTemplate: TemplateRef<{
        $implicit: any;
    }>;
    closingDropdown: EventEmitter<void>;
    inputElement?: ElementRef<HTMLInputElement>;
    dropdownOptionsElement?: ElementRef<HTMLDivElement>;
    options: import("@angular/core").InputSignal<T[]>;
    totalSearchOptions: import("@angular/core").InputSignal<number>;
    pageSearch: import("@angular/core").WritableSignal<IPageSearch>;
    openDropdownInput: import("@angular/core").InputSignal<boolean>;
    optionSelected: EventEmitter<T>;
    viewMoreClicked: EventEmitter<IPageSearch>;
    searching: import("@angular/core").WritableSignal<boolean>;
    selectedOption: import("@angular/core").WritableSignal<T | null>;
    private inputSubject;
    translationService: TranslationService;
    loadingService: LoadingService;
    private uniqueId;
    constructor();
    ngOnInit(): void;
    get inputId(): string;
    onKeyDown(event: KeyboardEvent): void;
    onInput(): void;
    onFocus(): void;
    closeDropdown(): void;
    openDropdown(): void;
    get clickOutsideElements(): HTMLElement[];
    get filteredOptions(): T[];
    selectOption(option: T): void;
    loadMore(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomInputSearchFormExpandedComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomInputSearchFormExpandedComponent<any>, "custom-input-search-expanded-form", never, { "dropdownTemplate": { "alias": "dropdownTemplate"; "required": false; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; "totalSearchOptions": { "alias": "totalSearchOptions"; "required": false; "isSignal": true; }; "openDropdownInput": { "alias": "openDropdownInput"; "required": false; "isSignal": true; }; }, { "closingDropdown": "closingDropdown"; "optionSelected": "optionSelected"; "viewMoreClicked": "viewMoreClicked"; }, never, never, true, never>;
}
export {};
