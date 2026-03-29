import { Roles } from '../../../enums';
export interface Tab {
    title: string;
    module?: string[];
    permissions?: string[];
    roles?: Roles[];
    hidden?: boolean | (() => boolean);
    icon: string;
}
export interface MainTab extends Tab {
    link?: string;
    isExpanded?: boolean;
    subTabs?: SubTab[];
    activeSubIndex?: number;
    sessionsToDestroy?: string[];
    tag?: string;
    badgeCount?: number | (() => number);
}
export interface SubTab extends Tab {
    link: string;
}
export type SvgIcons = 'dashboardSvg' | 'visitsSvg' | 'reportsSvg' | 'delegationSvg';
