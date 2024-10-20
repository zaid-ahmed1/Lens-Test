import { Interactable } from "SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable";
import { SIK } from "SpectaclesInteractionKit/SIK";

@component
export class PlanetDetails extends BaseScriptComponent {

    onAwake() {
        this.createEvent('OnStartEvent').bind(() => {
            this.onStart();
        })


    }

    onStart() {
        let interactionManager = SIK.InteractionManager;

        let interactable = interactionManager.getInteractableBySceneObject(this.sceneObject)


        interactable.onTriggerStart((interactorEvent) => {
            print(`OnTriggerStart executed on object: ${this.sceneObject.name}`);
        })

        interactable.onTriggerEnd((interactorEvent) => {
            print(`OnTriggerEnd executed on object: ${this.sceneObject.name}`);
        })
    }
}
