<template>
    <k-field class="k-button-section" :label="headline">
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
        data: function () {
            return {
                headline: null,
                text: null,
                button: null,
                url: null,
                theme: null,
                icon: null,
            }
        },
        created: function() {
            this.load().then(response => {
                this.headline = response.headline,
                this.text = response.text,
                this.button = response.button,
                this.url = response.url,
                this.theme = response.theme,
                this.icon = response.icon
            });
        }
    }
</script>

<style>

    p {
        margin-bottom: var(--spacing-2);
    }

</style>