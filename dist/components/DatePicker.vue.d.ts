import { type PropType } from 'vue';
import { PersianDate } from './utils/modules/core';
import type {
  Obj,
  Attrs,
  Langs,
  RecursivePartial,
  Styles,
  Inputs,
  PickerPlace,
  TypePart,
  CalendarPart,
  Disable,
  Formats,
  MonthDays,
  Months,
  Shortcuts,
  DefaultDate,
} from './utils/modules/types';
export { PersianDate };
declare const _default: import('@vue/runtime-core').DefineComponent<
  import('@vue/runtime-core').ExtractPropTypes<{
    /**
     * the format of the model value
     * @type String
     * @see https://alireza-ab.ir/persian-date/formats#
     * @desc default value in "date" type is "YYYY-MM-DD"
     * 		default value in "datetime" type is "YYYY-MM-DD HH:mm"
     * 		default value in "time" type is "HH:mm"
     */
    format: {
      type: StringConstructor;
    };
    /**
     * the format of the input value
     * @type String
     * @see https://alireza-ab.ir/persian-date/formats#
     * @desc default value equal to the value of "type" prop
     */
    inputFormat: {
      type: StringConstructor;
    };
    /**
     * the format of the value that shows in the footer of picker
     * @type String
     * @see https://alireza-ab.ir/persian-date/formats#
     * @desc default value in "date" type is "?D ?MMMM"
     * 		default value in "datetime" type is "?D ?MMMM HH:mm"
     * 		default value in "time" type is "HH:mm"
     */
    displayFormat: {
      type: StringConstructor;
    };
    /**
     * the type of picker
     * @default "date"
     * @type String
     * @values date | time | datetime
     * @since 2.0.0
     */
    type: {
      type: PropType<'date' | 'time' | 'datetime'>;
      default: string;
      validator: (val: string) => boolean;
    };
    /**
     * the date of start of the picker
     * @type String
     * @example 1400/7/1 | 1400-7
     */
    from: {
      type: StringConstructor;
      default: (props: Obj) => '' | '1300';
    };
    /**
     * the date of end of the picker
     * @type String
     * @example 1400/7/1 | 1400-7
     */
    to: {
      type: StringConstructor;
      default: (props: Obj) => '23:59' | '1499';
    };
    /**
     * show or hide the picker
     * @default false
     * @type Boolean
     */
    show: {
      default: boolean;
      type: BooleanConstructor;
    };
    /**
     * show the picker with click on the some sections
     * @default "all"
     * @type String
     * @values all | input | icon | none
     */
    clickOn: {
      default: string;
      type: PropType<'all' | 'input' | 'icon' | 'none'>;
      validator: (val: string) => boolean;
    };
    /**
     * show the picker in modal mode
     * @default true
     * @type Boolean
     */
    modal: {
      default: boolean;
      type: BooleanConstructor;
    };
    /**
     * text for label tag
     * @type String
     */
    label: {
      type: StringConstructor;
    };
    /**
     * number of column
     * @default "{ 576: 1 }"
     * @type Object | Number
     * @desc 1. you can send the number of column
     *  	or send the object of the number of
     *  	column in the breakpoint.
     * 		2. if the breaking point in the object
     * 		is not specified, the default value it's 2
     */
    column: {
      default: () => {
        576: number;
      };
      type: PropType<number | Record<number, number>>;
    };
    /**
     * minute Step
     * @default "1"
     * @type Number
     * @desc 1. you can send the number of step for minute.
     */
    minuteStep: {
      default: () => number;
      type: PropType<number>;
    };
    /**
     * hour Step
     * @default "1"
     * @type Number
     * @desc 1. you can send the number of step for hour.
     */
    hourStep: {
      default: () => number;
      type: PropType<number>;
    };
    /**
     * submit when date selected or not
     * @default true
     * @type Boolean
     */
    autoSubmit: {
      default: boolean;
      type: BooleanConstructor;
    };
    /**
     * mode of select date
     * @default "range"
     * @type String
     * @values range | single
     */
    mode: {
      default: string;
      type: PropType<'single' | 'range'>;
      validator: (val: string) => boolean;
    };
    /**
     * the locale of datepicker
     * @default "fa"
     * @type String
     * @values fa | en | fa,en |  en,fa
     * @desc Except above values, you can add
     *  	the language in "localeConfig" prop and use it.
     * @since 2.0.0
     */
    locale: {
      default: string;
      type: StringConstructor;
    };
    /**
     * user can clear the selected dates or not
     * @default false
     * @type Boolean
     * @since 2.0.0
     */
    clearable: {
      default: boolean;
      type: BooleanConstructor;
    };
    /**
     * disable some dates or time
     * @type [Array, String, Function, RegExp]
     * @since 2.0.0
     */
    disable: {
      type: PropType<Disable>;
    };
    /**
     * the config for locales
     * @type Object
     * @since 2.0.0
     */
    localeConfig: {
      type: PropType<RecursivePartial<Langs>>;
    };
    /**
     * the styles of the picker
     * @type Object
     * @since 2.0.0
     */
    styles: {
      type: PropType<Styles>;
    };
    /**
     * the color of the picker
     * @type String
     * @values red | pink | orange | green | purple | gray
     * @since 2.0.0
     */
    color: {
      type: PropType<
        'blue' | 'red' | 'pink' | 'orange' | 'green' | 'purple' | 'gray'
      >;
      validator: (val: string) => boolean;
    };
    /**
     * use two input for dispaly
     * @type Boolean
     * @default false
     * @since 2.2.0
     */
    dualInput: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * show icon inside of input
     * @type Boolean
     * @default false
     * @since 2.2.0
     */
    iconInside: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * shortcut for select date and time quickly
     * @type Boolean | Object
     * @since 2.2.0
     */
    shortcut: {
      type: PropType<boolean | Shortcuts>;
      default: boolean;
    };
  }>,
  {},
  {
    core: any;
    onDisplay: PersianDate | undefined;
    fromDate: PersianDate | undefined;
    toDate: PersianDate | undefined;
    selectedDates: PersianDate[];
    selectedTimes: PersianDate[];
    showDatePicker: boolean;
    showYearSelect: boolean;
    showMonthSelect: boolean;
    showTopOfInput: boolean;
    displayValue: string[];
    inputName: Inputs;
    pickerPlace: PickerPlace;
    documentWidth: number;
    langs: any;
    currentLocale: string;
    interval: ReturnType<typeof setInterval> | null;
    submitedValue: PersianDate[];
  },
  {
    lang(): Langs[string];
    attrs(): Attrs;
    years(): number[];
    columnCount(): number;
    minuteStepCount(): number;
    hourStepCount(): number;
    monthDays(): MonthDays[][];
    months(): Months;
    nextLocale(): string;
    formats(): Formats;
    defaultDate(): DefaultDate;
    inputs(): Inputs[];
    tabIndex(): number | undefined;
    shortcuts(): Shortcuts | false;
  },
  {
    showPart(part: CalendarPart): void;
    changeSelectedMonth(month: 'add' | 'sub' | number): void;
    changeSelectedYear(year: number): void;
    validate(date: PersianDate, part: TypePart): boolean;
    isDisableBetween(first: PersianDate, second: PersianDate): boolean;
    selectDate(date: PersianDate, part: TypePart): number;
    setModel(date?: PersianDate | PersianDate[] | string | string[]): void;
    goToToday(): void;
    checkDate(date: unknown, part: CalendarPart | TypePart): boolean;
    isInDisable(date: PersianDate, disable?: Disable): boolean;
    showPicker(el: 'icon' | 'input', index: 0 | 1): void;
    selectWithArrow(e: KeyboardEvent): Promise<void>;
    selectInRangeDate(e: any): void;
    submitDate(close?: boolean): void;
    getColumn({ parentNode }: HTMLElement): number | string;
    nearestDate(date: PersianDate): PersianDate;
    locate(): void;
    changeLocale(): void;
    clear(inputName: Inputs): void;
    startChangeTime(
      timeIndex: number,
      unit: 'minute' | 'hour',
      operator: 'add' | 'sub',
    ): void;
    stopChangeTime(): void;
    selectShorcut(dates: PersianDate[]): void;
    setDate(dates: string | string[]): void;
  },
  import('@vue/runtime-core').ComponentOptionsMixin,
  import('@vue/runtime-core').ComponentOptionsMixin,
  ('select' | 'clear' | 'submit' | 'open' | 'close' | 'update:modelValue')[],
  'select' | 'clear' | 'submit' | 'open' | 'close' | 'update:modelValue',
  import('@vue/runtime-core').PublicProps,
  Readonly<
    import('@vue/runtime-core').ExtractPropTypes<{
      /**
       * the format of the model value
       * @type String
       * @see https://alireza-ab.ir/persian-date/formats#
       * @desc default value in "date" type is "YYYY-MM-DD"
       * 		default value in "datetime" type is "YYYY-MM-DD HH:mm"
       * 		default value in "time" type is "HH:mm"
       */
      format: {
        type: StringConstructor;
      };
      /**
       * the format of the input value
       * @type String
       * @see https://alireza-ab.ir/persian-date/formats#
       * @desc default value equal to the value of "type" prop
       */
      inputFormat: {
        type: StringConstructor;
      };
      /**
       * the format of the value that shows in the footer of picker
       * @type String
       * @see https://alireza-ab.ir/persian-date/formats#
       * @desc default value in "date" type is "?D ?MMMM"
       * 		default value in "datetime" type is "?D ?MMMM HH:mm"
       * 		default value in "time" type is "HH:mm"
       */
      displayFormat: {
        type: StringConstructor;
      };
      /**
       * the type of picker
       * @default "date"
       * @type String
       * @values date | time | datetime
       * @since 2.0.0
       */
      type: {
        type: PropType<'date' | 'time' | 'datetime'>;
        default: string;
        validator: (val: string) => boolean;
      };
      /**
       * the date of start of the picker
       * @type String
       * @example 1400/7/1 | 1400-7
       */
      from: {
        type: StringConstructor;
        default: (props: Obj) => '' | '1300';
      };
      /**
       * the date of end of the picker
       * @type String
       * @example 1400/7/1 | 1400-7
       */
      to: {
        type: StringConstructor;
        default: (props: Obj) => '23:59' | '1499';
      };
      /**
       * show or hide the picker
       * @default false
       * @type Boolean
       */
      show: {
        default: boolean;
        type: BooleanConstructor;
      };
      /**
       * show the picker with click on the some sections
       * @default "all"
       * @type String
       * @values all | input | icon | none
       */
      clickOn: {
        default: string;
        type: PropType<'all' | 'input' | 'icon' | 'none'>;
        validator: (val: string) => boolean;
      };
      /**
       * show the picker in modal mode
       * @default true
       * @type Boolean
       */
      modal: {
        default: boolean;
        type: BooleanConstructor;
      };
      /**
       * text for label tag
       * @type String
       */
      label: {
        type: StringConstructor;
      };
      /**
       * number of column
       * @default "{ 576: 1 }"
       * @type Object | Number
       * @desc 1. you can send the number of column
       *  	or send the object of the number of
       *  	column in the breakpoint.
       * 		2. if the breaking point in the object
       * 		is not specified, the default value it's 2
       */
      column: {
        default: () => {
          576: number;
        };
        type: PropType<number | Record<number, number>>;
      };
      /**
       * minute Step
       * @default "1"
       * @type Number
       * @desc 1. you can send the number of step for minute.
       */
      minuteStep: {
        default: () => number;
        type: PropType<number>;
      };
      /**
       * hour Step
       * @default "1"
       * @type Number
       * @desc 1. you can send the number of step for hour.
       */
      hourStep: {
        default: () => number;
        type: PropType<number>;
      };
      /**
       * submit when date selected or not
       * @default true
       * @type Boolean
       */
      autoSubmit: {
        default: boolean;
        type: BooleanConstructor;
      };
      /**
       * mode of select date
       * @default "range"
       * @type String
       * @values range | single
       */
      mode: {
        default: string;
        type: PropType<'single' | 'range'>;
        validator: (val: string) => boolean;
      };
      /**
       * the locale of datepicker
       * @default "fa"
       * @type String
       * @values fa | en | fa,en |  en,fa
       * @desc Except above values, you can add
       *  	the language in "localeConfig" prop and use it.
       * @since 2.0.0
       */
      locale: {
        default: string;
        type: StringConstructor;
      };
      /**
       * user can clear the selected dates or not
       * @default false
       * @type Boolean
       * @since 2.0.0
       */
      clearable: {
        default: boolean;
        type: BooleanConstructor;
      };
      /**
       * disable some dates or time
       * @type [Array, String, Function, RegExp]
       * @since 2.0.0
       */
      disable: {
        type: PropType<Disable>;
      };
      /**
       * the config for locales
       * @type Object
       * @since 2.0.0
       */
      localeConfig: {
        type: PropType<RecursivePartial<Langs>>;
      };
      /**
       * the styles of the picker
       * @type Object
       * @since 2.0.0
       */
      styles: {
        type: PropType<Styles>;
      };
      /**
       * the color of the picker
       * @type String
       * @values red | pink | orange | green | purple | gray
       * @since 2.0.0
       */
      color: {
        type: PropType<
          'blue' | 'red' | 'pink' | 'orange' | 'green' | 'purple' | 'gray'
        >;
        validator: (val: string) => boolean;
      };
      /**
       * use two input for dispaly
       * @type Boolean
       * @default false
       * @since 2.2.0
       */
      dualInput: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * show icon inside of input
       * @type Boolean
       * @default false
       * @since 2.2.0
       */
      iconInside: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * shortcut for select date and time quickly
       * @type Boolean | Object
       * @since 2.2.0
       */
      shortcut: {
        type: PropType<boolean | Shortcuts>;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      onSubmit?: (...args: any[]) => any;
      onSelect?: (...args: any[]) => any;
      onClear?: (...args: any[]) => any;
      onOpen?: (...args: any[]) => any;
      onClose?: (...args: any[]) => any;
      'onUpdate:modelValue'?: (...args: any[]) => any;
    }>,
  {
    type: 'time' | 'date' | 'datetime';
    from: string;
    to: string;
    show: boolean;
    clickOn: 'input' | 'icon' | 'all' | 'none';
    modal: boolean;
    column: number | Record<number, number>;
    minuteStep: number;
    hourStep: number;
    autoSubmit: boolean;
    mode: 'range' | 'single';
    locale: string;
    clearable: boolean;
    dualInput: boolean;
    iconInside: boolean;
    shortcut: any;
  },
  {},
  {
    PDPArrow: import('@vue/runtime-core').DefineComponent<
      import('@vue/runtime-core').ExtractPropTypes<{
        direction: {
          default: string;
          type: PropType<'up' | 'down' | 'right' | 'left'>;
        };
        inverse: {
          default: boolean;
          type: BooleanConstructor;
        };
      }>,
      {},
      {},
      {},
      {},
      import('@vue/runtime-core').ComponentOptionsMixin,
      import('@vue/runtime-core').ComponentOptionsMixin,
      {},
      string,
      import('@vue/runtime-core').PublicProps,
      Readonly<
        import('@vue/runtime-core').ExtractPropTypes<{
          direction: {
            default: string;
            type: PropType<'up' | 'down' | 'right' | 'left'>;
          };
          inverse: {
            default: boolean;
            type: BooleanConstructor;
          };
        }>
      > &
        Readonly<{}>,
      {
        direction: 'up' | 'down' | 'right' | 'left';
        inverse: boolean;
      },
      {},
      {},
      {},
      string,
      import('@vue/runtime-core').ComponentProvideOptions,
      true,
      {},
      any
    >;
    PDPIcon: import('@vue/runtime-core').DefineComponent<
      import('@vue/runtime-core').ExtractPropTypes<{
        icon: {
          type: PropType<'clear' | 'date' | 'datetime' | 'time'>;
          required: true;
        };
      }>,
      {},
      {},
      {},
      {},
      import('@vue/runtime-core').ComponentOptionsMixin,
      import('@vue/runtime-core').ComponentOptionsMixin,
      {},
      string,
      import('@vue/runtime-core').PublicProps,
      Readonly<
        import('@vue/runtime-core').ExtractPropTypes<{
          icon: {
            type: PropType<'clear' | 'date' | 'datetime' | 'time'>;
            required: true;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      string,
      import('@vue/runtime-core').ComponentProvideOptions,
      true,
      {},
      any
    >;
    PDPAlt: import('@vue/runtime-core').DefineComponent<
      import('@vue/runtime-core').ExtractPropTypes<{
        name: {
          type: StringConstructor;
          required: true;
        };
        format: {
          type: StringConstructor;
          required: true;
        };
        dates: {
          type: PropType<PersianDate[]>;
          required: true;
        };
      }>,
      {},
      {},
      {},
      {},
      import('@vue/runtime-core').ComponentOptionsMixin,
      import('@vue/runtime-core').ComponentOptionsMixin,
      {},
      string,
      import('@vue/runtime-core').PublicProps,
      Readonly<
        import('@vue/runtime-core').ExtractPropTypes<{
          name: {
            type: StringConstructor;
            required: true;
          };
          format: {
            type: StringConstructor;
            required: true;
          };
          dates: {
            type: PropType<PersianDate[]>;
            required: true;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      string,
      import('@vue/runtime-core').ComponentProvideOptions,
      true,
      {},
      any
    >;
  },
  {},
  string,
  import('@vue/runtime-core').ComponentProvideOptions,
  true,
  {},
  any
>;
export default _default;
