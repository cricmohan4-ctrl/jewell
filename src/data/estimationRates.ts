export type JewelType = "gold" | "diamond" | "platinum";

export const estimationRates: Record<JewelType, number> = {
  gold: 4500,
  diamond: 50000,
  platinum: 3000,
};