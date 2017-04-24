import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { KeepModalDialogComponent } from './keep.modal';
import { RoomModalDialogComponent } from './room.modal';
import { ThingModalDialogComponent } from './thing.modal';
import { ModalTypes } from '../../../lib/constants';

@Component({
    selector: 'cstl-modal',
    templateUrl: 'cstl.modal.html'
})

export class EditModalDialogComponent {
    @Input() selectedParent;
    @Input() modalType;
    @Input() modalText;
    @Output() modalResult = new EventEmitter();

    constructor(public dialog: MdDialog) { }

    openDialog() {
        let dialogRef;
        let config;

        switch (this.modalType) {
            case ModalTypes.KEEP:
                dialogRef = this.dialog.open(KeepModalDialogComponent);
                break;
            case ModalTypes.ROOM:
                config = new MdDialogConfig();
                config.data = this.selectedParent;
                dialogRef = this.dialog.open(RoomModalDialogComponent, config);
                break;
            case ModalTypes.THING:
                config = new MdDialogConfig();
                config.data = this.selectedParent;
                dialogRef = this.dialog.open(ThingModalDialogComponent, config);
                break;
        }

        dialogRef.afterClosed().subscribe(result => {
            this.modalResult.emit(result);
        });
    }
}
