import {Component, Output, OnInit, EventEmitter} from "@angular/core";
import { DataService } from "../services/data.services";

@Component({
    selector: "app-cockpit",
    templateUrl: "./cockpit.component.html"
})
export class CockpitComponent implements OnInit {
    // @Output() serverElementEmitter = new EventEmitter<{name:string, type:string, content:string}>();

    constructor(private dataService: DataService) {

    }

    ngOnInit() {

    }

    addServerElement(nameInput:HTMLInputElement, contentInput:HTMLInputElement, elementType:string) {
        // this.serverElementEmitter.emit({
        //     name: nameInput.value,
        //     content: contentInput.value,
        //     type: elementType
        // });
        this.dataService.addServerElement({
            type: elementType,
            content: contentInput.value,
            name: nameInput.value
        })
    }
};