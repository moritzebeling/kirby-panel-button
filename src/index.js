import ButtonField from "./ButtonField.vue";
import ButtonSection from "./ButtonSection.vue";

panel.plugin("moritzebeling/panel-button", {
    fields: {
        button: ButtonField
    },
    sections: {
        button: ButtonSection
    }
});