import PersianDate from '@alireza-ab/persian-date';
import { Obj, Units, Langs, Shortcuts } from './types';
export declare const Core: {
    langs: Langs;
    mergeObject: (original: Obj, changed: Obj | undefined) => Obj;
    setStyles: (styles: Obj | undefined, root: HTMLElement) => void;
    setColor: (color: string | undefined, root: HTMLElement) => void;
    getLastUnit: (date: string, type: "time" | "datetime" | "date") => Units;
    getShortcuts(date: PersianDate, part: string, translate: Record<string, string>): Shortcuts;
    isString: (val: unknown) => boolean;
    isNumber: (val: unknown) => boolean;
    isFunction: (val: unknown) => boolean;
    isPersianDate: (val: unknown) => boolean;
};
export { PersianDate };
