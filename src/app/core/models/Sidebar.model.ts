import { IconProp } from "@fortawesome/fontawesome-svg-core";

export class Menu {
    id!: number;
    name!: string;
    icon?: IconProp;
    route!: string;
    hasBadge?: boolean = false;
    active: boolean = false;
}