import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Keep } from '../../../reducers/keep';

@Component({
    selector: 'cstl-keep-modal',
    templateUrl: './keep.modal.html',
})
export class KeepModalDialogComponent {
    constructor(public dialogRef: MdDialogRef<KeepModalDialogComponent>) { }

    close() {
        let k: Keep = {
            name: 'Modal Dummy',
            id: Math.random(),
            loading: false
        };
        this.dialogRef.close(k);
    }
}
