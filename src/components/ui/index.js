import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';
import BaseCard from './BaseCard.vue';
import BaseTextarea from './BaseTextarea.vue';
import BaseCheckbox from './BaseCheckbox.vue';
import BaseSelect from './BaseSelect.vue';
import BaseModal from './BaseModal.vue';

// Export individual components
export { BaseInput };
export { BaseButton };
export { BaseCard };
export { BaseTextarea };
export { BaseCheckbox };
export { BaseSelect };
export { BaseModal };

// Register all components globally
export function registerComponents(app) {
    const components = [
        { name: 'BaseInput', component: BaseInput },
        { name: 'BaseButton', component: BaseButton },
        { name: 'BaseCard', component: BaseCard },
        { name: 'BaseTextarea', component: BaseTextarea },
        { name: 'BaseCheckbox', component: BaseCheckbox },
        { name: 'BaseSelect', component: BaseSelect },
        { name: 'BaseModal', component: BaseModal },
    ];

    components.forEach(({ name, component }) => {
        app.component(name, component);
    });
}
