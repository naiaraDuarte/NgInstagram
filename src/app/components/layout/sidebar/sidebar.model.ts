import { IconProp } from "@fortawesome/fontawesome-svg-core";

export class Menu {
    id: number = 0;
    name: string = '';
    icon?: IconProp;
    route: string = '';
    hasBadge?: boolean = false;
    active: boolean = false;
}