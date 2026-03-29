import { IFunctionDropdown } from '../../../../../interfaces';
import { AuthService, TranslationService } from '../../../../../services';
import * as i0 from "@angular/core";
export declare class MainSectionComponent {
    notificationDropDown: IFunctionDropdown[];
    settingsDropDown: IFunctionDropdown[];
    profileDropDown: IFunctionDropdown[];
    authService: AuthService;
    translation: TranslationService;
    ngOnInit(): void;
    isArabic(): boolean;
    switchLanguage(lang: string): void;
    onNotifSelect(item: any): void;
    onSettingSelect(item: any): void;
    onProfileSelect(item: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MainSectionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MainSectionComponent, "app-main-section", never, {}, {}, never, never, true, never>;
}
