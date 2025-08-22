export const PUBLIC_URL = {
  root: (url = "") => `${url ? url : ""}`,

  checkIn: () => PUBLIC_URL.root("/check-in"),
  home: () => PUBLIC_URL.root("/home"),
  earn: () => PUBLIC_URL.root("/earn"),
  battle: () => PUBLIC_URL.root("/battle"),
  shop: () => PUBLIC_URL.root("/shop"),
  wallet: () => PUBLIC_URL.root("/wallet"),
  battleSelectHero: () => PUBLIC_URL.root("/battle/select"),
  battleFinish: (id: number) => PUBLIC_URL.root(`/battle/finish/${id}`),
  battleArea: (heroId: number) => PUBLIC_URL.root(`/battle/${heroId}`),
};
