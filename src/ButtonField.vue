<template>
    <k-field class="k-button-field" :label="label" :help="help">

        <div class="k-button-field-button-wrapper">

            <button v-if="!isLoading" type="button" class="k-button-field-button k-button k-box" :data-theme="theme" @click="onClick">
                <k-icon :type="icon" class="k-button-icon" />
                <span class="k-button-text">{{ text }}</span>
            </button>
            
            <div v-if="isLoading && !hasError" type="button" class="k-button-field-button k-button k-button-disabled k-box" data-disabled="true">
                <k-icon type="dots" class="k-button-icon" />
                <span class="k-button-text">Please wait</span>
            </div>
            
            <div v-if="hasError" type="button" class="k-button-field-button k-button k-button-disabled k-box" data-disabled="true" data-theme="negative">
                <k-icon type="alert" class="k-button-icon" />
                <span class="k-button-text">Error</span>
            </div>

        </div>
            
    </k-field>
</template>

<script>

    import { openUrlInNewTab, triggerWebhook } from "./methods";

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
            async onClick(){
                if( this.open === true ){
                    /*
                    open url in new tab
                    */
                    openUrlInNewTab( this );
                } else {
                    /*
                    trigger webhook
                    */
                    triggerWebhook( this );
                }
            }
        }
    }
</script>

<style>

    p {
        margin-bottom: var(--spacing-2);
    }

    .k-button-field-button {
        display: block;
        width: 100%;
        text-align: left;
    }

</style>