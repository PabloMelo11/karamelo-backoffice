import 'styled-components';

import main from './themes/main';

export type Main = typeof main;

declare module 'styled-components' {
  export interface DefaultTheme extends Main {}
}
