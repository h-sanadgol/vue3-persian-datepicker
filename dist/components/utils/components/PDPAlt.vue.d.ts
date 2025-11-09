import type { PropType } from 'vue';
import type { PersianDate } from '../modules/core';
declare const _default: import('@vue/runtime-core').DefineComponent<
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
export default _default;
