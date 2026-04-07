import { ComponentRef, EventEmitter, Provider, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomModalComponent {
    modalTitle: string;
    modalTitleTemplate?: TemplateRef<any>;
    modalSubTitle: string;
    modalIcon: string;
    overlayClickClose: boolean;
    showHeader: boolean;
    headerBgImg: string;
    hideEvent: EventEmitter<void>;
    closed: EventEmitter<void>;
    isVisible: boolean;
    private contentReadySubject;
    readonly contentReady$: import("rxjs").Observable<void>;
    private hostVcRef;
    private dynamicChildRef?;
    set contentHost(vcr: ViewContainerRef | null);
    open(): void;
    close(): void;
    closeInternal(): void;
    onOverlayClick(event: MouseEvent): void;
    /** Attach child and provide MODAL_REF so it can close itself */
    attachContent<T>(component: Type<T>, extraProviders?: Provider[]): ComponentRef<T>;
    private clearDynamicContent;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomModalComponent, "modal", never, { "modalTitle": { "alias": "modalTitle"; "required": false; }; "modalTitleTemplate": { "alias": "modalTitleTemplate"; "required": false; }; "modalSubTitle": { "alias": "modalSubTitle"; "required": false; }; "modalIcon": { "alias": "modalIcon"; "required": false; }; "overlayClickClose": { "alias": "overlayClickClose"; "required": false; }; "showHeader": { "alias": "showHeader"; "required": false; }; "headerBgImg": { "alias": "headerBgImg"; "required": false; }; }, { "hideEvent": "hideEvent"; "closed": "closed"; }, never, ["*"], true, never>;
}
