import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      language: "en",
      hospital: "hyderabad",
      setLanguage: (language) => set({ language }),
      setHospital: (hospital) => set({ hospital }),
    }),
    {
      name: "care-hospitals-storage",
    }
  )
);

export default useStore;
