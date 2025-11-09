import { type PropType } from 'vue';
type Direction = 'up' | 'down' | 'right' | 'left';
declare const _default: import('@vue/runtime-core').DefineComponent<
  import('@vue/runtime-core').ExtractPropTypes<{
    direction: {
      default: string;
      type: PropType<Direction>;
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
        type: PropType<Direction>;
      };
      inverse: {
        default: boolean;
        type: BooleanConstructor;
      };
    }>
  > &
    Readonly<{}>,
  {
    direction: Direction;
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
export default _default;
