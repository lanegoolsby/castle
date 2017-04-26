import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { KeepModalDialogComponent } from './keep.modal';
import { RoomModalDialogComponent } from './room.modal';
import { ThingModalDialogComponent } from './thing.modal';
import { DeleteModalDialogComponent } from './delete.modal';
import { ModalTypes } from '../../../lib/constants';

@Component({
    selector: 'cstl-modal',
    templateUrl: 'cstl.modal.html'
})

export class EditModalDialogComponent {
    @Input() selectedParent;
    @Input() selectedItem;
    @Input() modalType;
    @Input() modalText;
    @Output() modalResult = new EventEmitter();

    constructor(public dialog: MdDialog) { }

    openDialog() {
        let dialogRef;
        let config = new MdDialogConfig();
        config.data = {
            parent: Object.assign({}, this.selectedParent),
            item: Object.assign({}, this.selectedItem)
        };

        switch (this.modalType) {
            case ModalTypes.KEEP:
                dialogRef = this.dialog.open(KeepModalDialogComponent, config);
                break;
            case ModalTypes.ROOM:
                dialogRef = this.dialog.open(RoomModalDialogComponent, config);
                break;
            case ModalTypes.THING:
                dialogRef = this.dialog.open(ThingModalDialogComponent, config);
                break;
            case ModalTypes.DELETE:
                dialogRef = this.dialog.open(DeleteModalDialogComponent, config);
                break;
            default:
                console.error('Unknown modal type');
                break;
        }


        dialogRef.afterClosed().subscribe(result => {
            if (result !== null) {
                this.modalResult.emit(result);
            }
        });
    }
}
