import { EventEmitter, TemplateRef } from '@angular/core';
import { ITableCategory, ITableHeader } from '../../interfaces';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class CustomTableComponent<T> {
    private sanitizer;
    path: string;
    tableHeader: ITableHeader<T>[];
    tableData: T[] | null;
    showActionColumn: boolean;
    tableCategories: ITableCategory<T>[] | null;
    cellTemplates: {
        [key: string]: TemplateRef<any>;
    };
    templates: {
        [key: string]: TemplateRef<any>;
    };
    actionsTemplate: TemplateRef<any> | null;
    showNumberCol: boolean;
    pagination: any;
    rowClass: string;
    headerClass: string;
    onRowClick: EventEmitter<T>;
    sortColumn: EventEmitter<string | number | symbol | undefined>;
    checkedSortIcon: SafeHtml;
    checkedActionViewSvg: SafeHtml;
    checkedActionEditSvg: SafeHtml;
    checkedActionDeleteSvg: SafeHtml;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTableComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomTableComponent<any>, "custom-table", never, { "tableHeader": { "alias": "tableHeader"; "required": true; }; "tableData": { "alias": "tableData"; "required": true; }; "showActionColumn": { "alias": "showActionColumn"; "required": false; }; "tableCategories": { "alias": "tableCategories"; "required": false; }; "cellTemplates": { "alias": "cellTemplates"; "required": false; }; "templates": { "alias": "templates"; "required": false; }; "actionsTemplate": { "alias": "actionsTemplate"; "required": false; }; "showNumberCol": { "alias": "showNumberCol"; "required": false; }; "pagination": { "alias": "pagination"; "required": false; }; "rowClass": { "alias": "rowClass"; "required": false; }; "headerClass": { "alias": "headerClass"; "required": false; }; }, { "onRowClick": "onRowClick"; "sortColumn": "sortColumn"; }, never, never, true, never>;
}
