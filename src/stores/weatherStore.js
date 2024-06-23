// src/stores/weatherStore.js
import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    weatherWidgets: [],
  }),
  actions: {
    async fetchWeather(location) {
      const apiKey = "cb2b9591d9c7a39873b97298d94c487b"; 
      try {
        const response = await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const weather = await response.json();
        this.weatherWidgets.push(weather);
      } catch (error) {
        console.error("Failed to fetch weather data:", error.message);
      }
    },
    removeWidget(index) {
      this.weatherWidgets.splice(index, 1);
    },
  },
});
