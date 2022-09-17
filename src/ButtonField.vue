<template>
    <k-field class="k-button-field" :label="label">

        <div class="k-button-field-button-wrapper">
            <button type="button" class="k-button-field-button k-button k-box" :data-theme="theme" @click="onClick">
                <k-icon :type="icon" class="k-button-icon" />
                <span class="k-button-text">{{ text }}</span>
            </button>
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
            icon: String,
            open: Boolean,
        },
        methods: {
            onClick(){
                if( this.open === true ){
                    /*
                    open url in new tab
                    */
                    window.open( this.url, '_blank' );
                } else {
                    console.log( 'Trigger webhook', this.url );
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
        background-color: red;
        display: block;
        width: 100%;
        text-align: left;
    }

</style>