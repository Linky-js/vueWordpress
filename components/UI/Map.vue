<script setup>
import { shallowRef } from "vue";
import marker from "~/assets/img/marker.svg";
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from "vue-yandex-maps";
const map = shallowRef(null);
const coord = ref([37.617644, 55.755819]);
</script>

<template>
  <YandexMap
    v-model="map"
    :settings="{
      location: {
        center: [37.617644, 55.755819],
        zoom: 9,
      },
    }"
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
  filter: url("data:image/svg+xml;utf8,#grayscale") !important;
  -webkit-filter: grayscale(100%) !important;

  &__marker {
    max-width: unset;
    width: 24px;
    height: 24px;
  }
}
</style>
