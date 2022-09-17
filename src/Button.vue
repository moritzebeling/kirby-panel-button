<template>
    <k-field class="k-button-field" :label="label">
        <div class="k-box" :data-theme="theme">

            <p v-if="text">{{text}}</p>

            <div class="k-button-field-button-wrapper" :data-theme="theme">
                <div class="k-button-field-button-inner">
                    <k-button :icon="icon">{{ button }}</k-button>
                </div>
            </div>
            
        </div>
    </k-field>
</template>

<script>
    export default {
        props: {
            label: String,
            text: String,
            button: String,
            url: String,
            theme: String,
            icon: String,
        }
    }
</script>

<style>

    p {
        margin-bottom: var(--spacing-2);
    }

</style>