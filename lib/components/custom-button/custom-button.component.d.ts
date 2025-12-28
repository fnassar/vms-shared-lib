import * as i0 from "@angular/core";
export declare class CustomButtonComponent {
    variant: 'primary' | 'primary-inverse' | 'secondary' | 'secondary-inverse' | 'danger';
    size: 'small' | 'medium' | 'large';
    disabled: boolean;
    type: 'button' | 'submit' | 'reset';
    get buttonClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomButtonComponent, "button[app-button]", never, { "variant": { "alias": "variant"; "required": true; }; "size": { "alias": "size"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
