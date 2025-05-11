// types/router.d.ts
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    transition?: {
      enter: string;
      leave: string;
    };
  }
}
