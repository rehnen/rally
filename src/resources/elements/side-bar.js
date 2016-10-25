import {bindable} from 'aurelia-framework';

export class SideBar {
    @bindable filter
    
    constructor() {
    }
    filterChanged(newValue, oldValue) {
        if(!this.list)
            return;        
        var listItems = this.list.querySelectorAll("li");
        listItems.forEach((item) => {
            if(item.innerHTML.indexOf(newValue) === -1) {
                item.style.display = "none";
            } else {
                item.style.display = "block";                
            }
        })
    }
    
}

