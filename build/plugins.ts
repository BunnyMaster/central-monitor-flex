import vue from "@vitejs/plugin-vue";
import {PluginOption} from "vite";

export const plugins = (): PluginOption[] => {


    return [
        vue()
    ]
}