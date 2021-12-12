import 'styled-components';
import {ThemeState} from './packages/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeState {
  }
}