import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//リポジトリ名を定数で指定
const REPO_NAME = 'learning_reactTodoApp';

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
  build: {
    outDir:'dist', // 出力先ディレクトリを指定
  },
})
