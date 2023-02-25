import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    server_elements: {type:string, name:string, content:string}[] = [];

    addServerElement(serverElementData: {type:string, name:string, content:string}) {
        console.log(this.server_elements);
        this.server_elements.push(serverElementData);
    }

    getServerElement(type:string) {
        const elements = this.server_elements.filter((ele) => {
            return ele.type === type;
        });
        console.log(elements);
        return elements;
    }
}