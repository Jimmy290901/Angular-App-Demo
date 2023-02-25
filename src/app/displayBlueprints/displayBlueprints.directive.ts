import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

//Building a Custom Structural Directive
@Directive({
    selector: '[appDisplayBp]'
})
export class DisplayBlueprint {
    @Input() set appDisplayBp(condition: boolean) {
        if (condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    };
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
};