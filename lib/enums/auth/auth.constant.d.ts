export declare enum AuthConstant {
    TOKEN = "accessToken",
    REFRESH_TOKEN = "refreshToken",
    USER_DATA = "user",
    USER_PERMISSIONS = "permissions",
    USER_ROLES = "roles",
    USER_ROLES_DETAILS = "rolesDetails",
    EXPIRES_AT = "expiresIn"
}
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SUSPENDED = "SUSPENDED"
}
export declare enum Roles {
    ADMIN = "ADMIN",
    HSSE_OPERATOR = "HSSE-OPERATOR",
    HSSE_MANAGER = "HSSE-MANAGER"
}
export declare enum PERMISSIONS {
    all = "all",
    USER_READ_SELF = "user:read:self",
    TASK_CREATE_TEAM = "task:create:team",
    TASK_VIEW_LIST_SELF = "task:view-list:self",
    TASK_VIEW_DETAILS_SELF = "task:view-details:self",
    PLAN_CREATE_DRAFT_TEAM = "plan:create-draft:team",
    PLAN_CREATE_PUBLISH_TEAM = "plan:create-publish:team",
    PLAN_VIEW_GANTT_CHART_SELF = "plan:view-gantt-chart:self",
    PLAN_VIEW_DETAILS_SELF = "plan:view-details:self",
    PLAN_UPDATE_SELF = "plan:update:self",
    VEHICLE_CREATE_ORGANIZATION = "vehicle:create:organization",
    VEHICLE_VIEW_LIST_ORGANIZATION = "vehicle:view-list:organization",
    EQUIPMENT_CREATE_ORGANIZATION = "equipment:create:organization",
    EQUIPMENT_VIEW_LIST_ORGANIZATION = "equipment:view-list:organization",
    MOBILE_USER_VIEW_PROFILE_SELF = "mobile:user:view-profile:self",
    MOBILE_LANDING_VIEW_LANDING_SELF = "mobile:landing:view-landing:self",
    MOBILE_TASK_VIEW_LIST_SELF = "mobile:task:view-list:self",
    MOBILE_TASK_VIEW_DETAILS_SELF = "mobile:task:view-details:self",
    MOBILE_TASK_START_SELF = "mobile:task:start:self",
    MOBILE_TASK_PAUSE_SELF = "mobile:task:pause:self",
    MOBILE_TASK_RESUME_SELF = "mobile:task:resume:self",
    MOBILE_TASK_STOP_SELF = "mobile:task:stop:self"
}
