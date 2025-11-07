export type JewelType = "gold" | "diamond" | "platinum";

const DEFAULT_ESTIMATION_RATES: Record<JewelType, number> = {
  gold: 4500,
  diamond: 50000,
  platinum: 3000,
};

const LOCAL_STORAGE_KEY = "jewelPledgeEstimationRates";

export const getEstimationRates = (): Record<JewelType, number> => {
  if (typeof window !== "undefined") {
    const storedRates = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedRates) {
      try {
        return JSON.parse(storedRates);
      } catch (e) {
        console.error("Failed to parse stored estimation rates:", e);
        return DEFAULT_ESTIMATION_RATES;
      }
    }
  }
  return DEFAULT_ESTIMATION_RATES;
};

export const setEstimationRates = (rates: Record<JewelType, number>) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rates));
  }
};

// Export the default rates for initial use if local storage is empty or unavailable
export const estimationRates = DEFAULT_ESTIMATION_RATES;