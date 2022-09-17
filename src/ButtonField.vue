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
            open: Boolean
        },
        methods: {
            async onClick(){
                if( this.open === true ){
                    /*
                    open url in new tab
                    */
                    window.open( this.url, '_blank' );
                } else {
                    /*
                    trigger webhook
                    */
                    fetch( this.url )
                        .then((response) => response.json())
                        .then((data) => console.log(data));
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