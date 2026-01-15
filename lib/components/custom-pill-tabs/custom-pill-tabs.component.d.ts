import { EventEmitter, TemplateRef, ElementRef, OnDestroy } from '@angular/core';
import { ITabDropdownOption } from '../../interfaces';
import { TranslationService } from '../../services';
import * as i0 from "@angular/core";
export declare class CustomPillTabsComponent implements OnDestroy {
    tabsList: ITabDropdownOption[];
    color: string;
    colorSelected: string;
    backgroundColor: string;
    backgroundColorSelected: string;
    tabTemplates: {
        [key: string]: TemplateRef<any>;
    };
    selectedTab: ITabDropdownOption;
    tabClass: string;
    tabSelected: EventEmitter<ITabDropdownOption>;
    tabContainer: ElementRef<HTMLDivElement>;
    translationService: TranslationService;
    private dirObserver;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    selectTab(tab: ITabDropdownOption): void;
    private updatePillPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomPillTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomPillTabsComponent, "custom-pill-tabs", never, { "tabsList": { "alias": "tabsList"; "required": true; }; "color": { "alias": "color"; "required": false; }; "colorSelected": { "alias": "colorSelected"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "backgroundColorSelected": { "alias": "backgroundColorSelected"; "required": false; }; "tabTemplates": { "alias": "tabTemplates"; "required": false; }; "selectedTab": { "alias": "selectedTab"; "required": false; }; "tabClass": { "alias": "tabClass"; "required": false; }; }, { "tabSelected": "tabSelected"; }, never, never, true, never>;
}
