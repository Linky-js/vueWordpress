<script setup>
import { shallowRef, ref } from "vue";
import marker from "~/assets/img/marker.svg";
import mapStyle from "~/assets/map-style.json";
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from "vue-yandex-maps";

const map = shallowRef(null);
const coord = ref([37.617644, 55.755819]);

const mapCenter = [37.617644, 55.755819];

const mapSettings = {
  location: {
    center: mapCenter,
    zoom: 9,
  },
  theme: 'dark', 
  customization: mapStyle
};
</script>

<template>
  <YandexMap
    v-model="map"
    :settings="mapSettings"
    height="389px"
    class="map"
  >
    <YandexMapDefaultSchemeLayer />
    <YandexMapDefaultFeaturesLayer />

    <YandexMapMarker
      :settings="{ coordinates: coord }"
      position="top-center left-center"
    >
      <img :src="marker" alt="Map Marker" class="map__marker" />
    </YandexMapMarker>
  </YandexMap>
</template>


<style lang="scss" scoped>
.map {
  width: 100%;
  margin-bottom: 56px;

  &__marker {
    max-width: unset;
    width: 40px;
    height: 40px;
  }
}
</style>
