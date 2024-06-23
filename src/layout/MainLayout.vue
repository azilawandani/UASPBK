<template>
  <q-layout view="lHr lpR lfr">
    <q-header class="bg-pink text-black" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="title">Azila Wandani®</q-toolbar-title>
        <q-tabs align="left" class="tabs">
          <q-route-tab to="/" label="Weather" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-pink text-black" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="footer-title">
          &copy; Azila Wandani®. All rights reserved.
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup></script>

<style scoped>
.q-header {
  background-color: #ec407a !important;
  color: #ffffff !important;
}

.q-footer {
  background-color: #ec407a !important;
  color: #ffffff !important;
}

.q-toolbar {
  padding: 0 50px !important;
}

.q-toolbar__title {
  padding-left: 20px !important;
  font-size: 1.5em;
}

.tabs {
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
}

.q-tab {
  padding: 0 20px !important;
  min-height: 75px !important;
  font-size: 1.2em;
}

.footer-title {
  font-size: 1em;
  text-align: center;
  width: 100%;
}
</style>
