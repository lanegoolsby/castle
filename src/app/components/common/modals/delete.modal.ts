import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'cstl-delete-modal',
    templateUrl: './delete.modal.html',
})
export class DeleteModalDialogComponent implements OnInit {
    objectToDelete: any;

    constructor(
        @Optional() @Inject(MD_DIALOG_DATA) private dialogData: any,
        private dialogRef: MdDialogRef<DeleteModalDialogComponent>) {
    }

    ngOnInit() {
        this.objectToDelete = this.dialogData.item;
        if (!this.objectToDelete) {
            console.error('Trying to delete a null object?');
        }
    }

    close(submit = true) {
        if (submit === true) {
            this.dialogRef.close(this.objectToDelete);
        } else {
            this.dialogRef.close(null);
        }
    }
}
