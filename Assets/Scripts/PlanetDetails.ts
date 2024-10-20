import { Interactable } from "SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable";
import { SIK } from "SpectaclesInteractionKit/SIK";

@component
export class PlanetDetails extends BaseScriptComponent {


    @input()
    planetNameText: Text3D


    onAwake() {
        this.planetNameText.enabled = false;
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

        interactable.onHoverEnter(() => {
            this.planetNameText.enabled = true;
            this.planetNameText.text = `${this.sceneObject.name}`;
        })

        interactable.onHoverExit(() => {
            this.planetNameText.enabled = false;
        })        
    }
}
