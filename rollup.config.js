import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "static/src/app.js",
  output: [
    {
      format: "esm",
      file: "static/src/bundle.js",
    },
  ],
  plugins: [resolve()],
};