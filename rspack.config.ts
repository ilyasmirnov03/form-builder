import { defineConfig } from '@rspack/cli';

export default defineConfig({
  entry: {
    main: './lib/index.ts',
  },
  resolve: {
    extensions: [
      '.ts',
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
            },
          },
        },
        type: 'javascript/auto',
      },
    ],
  },
});
