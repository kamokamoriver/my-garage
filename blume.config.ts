import { defineConfig } from "blume";

export default defineConfig({
  title: "My Garage",
  description: "自作の資料・ノートをまとめておく個人サイト。",
  deployment: {
    site: "https://kamokamoriver.github.io",
    base: "/my-garage",
  },
});
