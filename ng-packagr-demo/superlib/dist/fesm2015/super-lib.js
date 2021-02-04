import { Component, NgModule } from '@angular/core';

class SuperLibComponent {
}
SuperLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'super-lib-component',
                template: "<p>Hello from external template</p>\n"
            },] }
];

class SuperLibModule {
}
SuperLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SuperLibComponent],
                exports: [SuperLibComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { SuperLibComponent, SuperLibModule };
//# sourceMappingURL=super-lib.js.map
