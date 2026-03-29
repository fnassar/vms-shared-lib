import { IUserData } from '../../../../interfaces';
import { AuthService, TranslationService } from '../../../../services';
import * as i0 from "@angular/core";
export declare class ProfileDataComponent {
    private readonly avatars;
    randomAvatar: string;
    userData: IUserData;
    userRoles: string[];
    userRolesDetails: any[];
    authService: AuthService;
    translationService: TranslationService;
    ngOnInit(): void;
    toCamelCaseArray(values: string[]): string;
    private getRandomAvatar;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileDataComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfileDataComponent, "app-profile-data", never, {}, {}, never, never, true, never>;
}
