<template>
  <k-field class="k-button-field" :label="label" :help="help">
    <div class="k-button-field-button-wrapper">
      <k-button
          v-if="!isLoading"
          :theme="theme"
          :icon="icon"
          variant="filled"
          @click="onClick"
      >
        {{ text }}
      </k-button>

      <k-button
          v-if="isLoading && !hasError"
          :disabled="true"
          icon="dots"
          theme="info"
          variant="filled"
          data-disabled="true"
      >
        Please wait
      </k-button>

      <k-button
          v-if="hasError"
          :disabled="true"
          icon="alert"
          theme="negative"
          variant="filled"
          @click="onClick"
      >
        Error
      </k-button>
    </div>
  </k-field>
</template>

<script>
import {openUrlInNewTab, triggerWebhook} from "./methods";

export default {
  props: {
    label: String,
    text: String,
    url: String,
    theme: String,
    icon: String,
    open: Boolean,
    reload: Boolean,
    help: String,
    isLoading: true,
    hasError: false
  },
  methods: {
    async onClick() {
      if (this.open === true) {
        /*
        open url in new tab
        */
        openUrlInNewTab(this);
      } else {
        /*
        trigger webhook
        */
        triggerWebhook(this);
      }
    }
  }
}
</script>

<style>
.k-button-field button {
  width: 100%;
  text-align: start;
  justify-content: start;
}
</style>
