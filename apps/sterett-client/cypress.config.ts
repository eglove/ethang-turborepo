import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      bundler: 'webpack',
      framework: 'next',
    },
  },
  projectId: 'djyb3s',
  video: false,
});
