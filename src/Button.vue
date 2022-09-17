<template>
    <k-field class="k-button-field" :label="label">
        <div class="k-box" :data-theme="theme">

            <p v-if="text">{{text}}</p>
            <button>Click here to trigger webhook {{url}}</button>
            
        </div>
    </k-field>
</template>

<script>
    export default {
        props: {
            label: String,
            text: String,
            url: String,
            theme: String,
        }
    }
</script>

<style>
  p {

  }
</style>