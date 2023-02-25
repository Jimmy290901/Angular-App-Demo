import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import { DataService } from "../services/data.services";

@Component({
    selector: "app-servers",
    templateUrl: "./servers.component.html",
})
export class AppServers {
    type!:string;
    color: string = 'transparent';
    elements!: {type: string, name: string, content: string}[];

    constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {}
    
    ngOnInit() {
        
        //Using observable for modifying data of component as per query params
        this.activatedRoute.params.subscribe((params) => {
            this.type = params['type'];
            this.elements = this.dataService.getServerElement(this.type);
        });
    }

    onColorClick(color:string) {
        this.color = color;
    }

}