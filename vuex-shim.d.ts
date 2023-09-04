import { Store } from "vuex";
import { State } from "./migration/types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}