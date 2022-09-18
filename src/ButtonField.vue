<template>
    <k-field class="k-button-field" :label="label">

        <div class="k-button-field-button-wrapper">

            <button v-if="!isLoading" type="button" class="k-button-field-button k-button k-box" :data-theme="theme" @click="onClick">
                <k-icon :type="icon" class="k-button-icon" />
                <span class="k-button-text">{{ text }}</span>
            </button>
            
            <div v-if="isLoading" type="button" class="k-button-field-button k-button k-button-disabled k-box" data-disabled="true">
                <k-icon type="dots" class="k-button-icon" />
                <span class="k-button-text">Please wait</span>
            </div>

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
            isLoading: true
        },
        methods: {
            async onClick(){
                if( this.open === true ){
                    /*
                    open url in new tab
                    */
                    console.log('Button field', 'Open link in new tab', this.url);
                    window.open( this.url, '_blank' );
                } else {
                    /*
                    trigger webhook
                    */
                    console.log('Button field', 'Trigger webhook', this.url);
                    this.isLoading = true;
                    fetch( this.url )
                        .then((response) => response.json())
                        .then((data) => {
                            this.isLoading = false;
                            console.log('Button field', 'Webhook successfully triggered', data)
                        });
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