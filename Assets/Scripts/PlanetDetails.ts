import { Interactable } from "SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable";

@component
export class PlanetDetails extends BaseScriptComponent {

    @input()
    interactable: Interactable
    onAwake() {
        this.createEvent('OnStartEvent').bind(() => {
            this.onStart();
        })


    }

    onStart() {
        this.interactable.onTriggerStart((interactorEvent) => {
            print(`OnTriggerStart executed on object: ${this.sceneObject.name}`);
        })

        this.interactable.onTriggerEnd((interactorEvent) => {
            print(`OnTriggerEnd executed on object: ${this.sceneObject.name}`);
        })
    }
}
