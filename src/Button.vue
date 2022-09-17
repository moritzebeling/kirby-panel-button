<template>
    <k-field class="k-button-field" :label="label">
        <p>Some optional text</p>
        <button>Click here to trigger webhook</button>
    </k-field>
</template>

<script>
    export default {
        props: {
            label: String
        }
    }
</script>

<style>
  /* optional scoped styles for the component */
</style>