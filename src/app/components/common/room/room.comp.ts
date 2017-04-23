import { Component, Input } from '@angular/core';
import { Keep } from '../../../reducers/keep';

@Component({
    selector: 'cstl-keep',
    templateUrl: 'keep_comp.html'
})

export class KeepComponent {

    @Input()
    selectedKeep: Keep;

    constructor(){
        
    }
}
