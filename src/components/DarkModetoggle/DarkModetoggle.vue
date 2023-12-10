<script setup lang="ts">
import { useQuasar } from 'quasar'
import { watch } from 'vue'
import { mdiWhiteBalanceSunny, mdiMoonWaningCrescent } from '@quasar/extras/mdi-v7'

const $q = useQuasar();

const mode = ref(true)

function setMode() {
  $q.dark.set(mode.value)
}

</script>

<template>
  <div>
      <q-toggle
        v-model="mode"
        :color=" mode ? 'black' : 'white' "
        :checked-icon="mdiMoonWaningCrescent"
        :unchecked-icon="mdiWhiteBalanceSunny"
        @click="setMode()"
      />
  </div>
</template>
