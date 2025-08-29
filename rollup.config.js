import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "dist/handsontable-renderers.min.js",
    format: "umd",
    name: "HandsontableRenderers",
    globals: {
      handsontable: "Handsontable"
    }
  },
  external: ["handsontable"],
  plugins: [terser()]
};
