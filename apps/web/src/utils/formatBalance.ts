export const formatBalance = (amount?: number): string => {
  if (!amount) return "0";

  return amount?.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const formatShortBalance = (amount?: number): string => {
  if (!amount) return "0";
  if (amount >= 1_000_000_000) return (amount / 1_000_000_000).toFixed(2) + "b";
  if (amount >= 1_000_000) return (amount / 1_000_000).toFixed(2) + "m";
  if (amount >= 1_000) return (amount / 1_000).toFixed(2) + "k";
  return amount.toString();
};
