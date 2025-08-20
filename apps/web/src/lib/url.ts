export const PUBLIC_URL = {
  root: (url = "") => `${url ? url : ""}`,

  home: () => PUBLIC_URL.root("/home"),
  earn: () => PUBLIC_URL.root("/earn"),
  battle: () => PUBLIC_URL.root("/battle"),
  shop: () => PUBLIC_URL.root("/shop"),
  wallet: () => PUBLIC_URL.root("/wallet"),
};
