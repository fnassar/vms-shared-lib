import { ComponentFormErrorConstant, IComponentFormError } from '../../public-api';
import { TranslateService } from '@ngx-translate/core';
export declare function getErrorValidation(fieldLabelKey: string, errorTypes: {
    error: ComponentFormErrorConstant;
    extra?: string;
}[], translate: TranslateService): IComponentFormError[];
