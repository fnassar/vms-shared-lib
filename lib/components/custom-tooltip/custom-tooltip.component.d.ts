import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomTooltipComponent {
    customClass: string;
    text: string;
    title: string;
    delay: number;
    position: 'top' | 'bottom' | 'left' | 'right' | 'bottom-end';
    template?: TemplateRef<any>;
    templateContext?: any;
    minWidth: string;
    visible: boolean;
    tooltipStyle: Record<string, string>;
    private timeoutId;
    private readonly el;
    onScrollOrResize(): void;
    show(): void;
    hide(): void;
    private calculatePosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomTooltipComponent, "custom-tooltip", never, { "customClass": { "alias": "customClass"; "required": false; }; "text": { "alias": "text"; "required": false; }; "title": { "alias": "title"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; "position": { "alias": "position"; "required": false; }; "template": { "alias": "template"; "required": false; }; "templateContext": { "alias": "templateContext"; "required": false; }; "minWidth": { "alias": "minWidth"; "required": false; }; }, {}, never, ["*"], true, never>;
}
