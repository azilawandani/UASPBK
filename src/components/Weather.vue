<template>
  <q-page class="column items-center justify-center q-pa-md">
    <div class="input-section">
      <q-input v-model="newLocation" label="Enter Location" />
      <q-btn @click="addWeatherWidget" label="Add Widget" color="pink" />
    </div>
    <div class="widgets-section">
      <div
        v-for="(weather, index) in weatherStore.weatherWidgets"
        :key="index"
        class="weather-widget"
      >
        <q-icon :name="getWeatherIcon(weather.weather[0].main)" size="50px" />
        <div class="location">
          <h2>{{ weather.name }}</h2>
        </div>
        <div class="temperature">
          <p>{{ convertTemp(weather.main.temp) }}</p>
        </div>
        <div class="details">
          <p>{{ weather.weather[0].description }}</p>
          <p>Wind: {{ weather.wind.speed }} m/s</p>
          <p>Humidity: {{ weather.main.humidity }}%</p>
          <p>Feels Like: {{ convertTemp(weather.main.feels_like) }}</p>
        </div>
        <q-btn
          @click="removeWidget(index)"
          label="Remove Widget"
          color="negative"
        />
      </div>
    </div>
    <div class="tasks-section">
      <q-btn
        v-for="task in tasks"
        :key="task.id"
        :label="task.label"
        @click="navigateToTask(task.url)"
        class="task-button"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { QPage, QInput, QBtn, QIcon } from "quasar";
import { useWeatherStore } from "../stores/weatherStore";

const weatherStore = useWeatherStore();

const newLocation = ref("");

const tasks = ref([
  { id: 1, label: "Task 1", url: "https://azila-projectcv.netlify.app/" },
  { id: 2, label: "Task 2", url: "https://tugaspert2.netlify.app/" },
  { id: 3, label: "Task 3", url: "https://223510275-azila.netlify.app/" },
  { id: 4, label: "Task 4", url: "https://tugas4azila.netlify.app/" },
  { id: 5, label: "Task 5", url: "https://azilatugas5.netlify.app/" },
  { id: 6, label: "Task 6", url: "https://azilatugas6.netlify.app/" },
]);

const weatherIconMapping = {
  Clear: "wb_sunny",
  Clouds: "cloud",
  Rain: "grain",
  Drizzle: "grain",
  Thunderstorm: "flash_on",
  Snow: "ac_unit",
  Mist: "blur_on",
  Smoke: "blur_on",
  Haze: "blur_on",
  Dust: "blur_on",
  Fog: "blur_on",
  Sand: "blur_on",
  Ash: "blur_on",
  Squall: "blur_on",
  Tornado: "toys",
};

const convertTemp = (tempInCelsius) => {
  return `${tempInCelsius.toFixed(1)} °C / ${(
    (tempInCelsius * 9) / 5 +
    32
  ).toFixed(1)} °F`;
};

const getWeatherIcon = (weatherMain) => {
  return weatherIconMapping[weatherMain] || "wb_cloudy";
};

const addWeatherWidget = async () => {
  await weatherStore.fetchWeather(newLocation.value);
  newLocation.value = "";
};

const removeWidget = (index) => {
  weatherStore.removeWidget(index);
};

const navigateToTask = (url) => {
  window.open(url, "_blank");
};
</script>

<style scoped>
.input-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.widgets-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background: #fdfbfb;
  background: linear-gradient(to right, #ebedee, #fdfbfb);
  border-radius: 12px;
}

.weather-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.weather-widget:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.weather-widget h2 {
  font-size: 1.8em;
  margin: 10px 0;
  color: #ff4081;
}

.weather-widget p {
  font-size: 1.1em;
  margin: 5px 0;
  color: #8d6e63;
}

.weather-widget .temperature p {
  font-size: 1.6em;
  font-weight: bold;
  margin-top: 10px;
  color: #ff7043;
}

.weather-widget .details p {
  font-size: 0.9em;
  margin: 3px 0;
  color: #8d6e63;
}

.q-icon {
  color: #ff4081;
}

.q-btn {
  margin-top: 10px;
  background-color: #ff4081;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.q-btn:hover {
  background-color: #d81b60;
}

.tasks-section {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.task-button {
  background-color: pink;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.task-button:hover {
  background-color: pink;
}
</style>
