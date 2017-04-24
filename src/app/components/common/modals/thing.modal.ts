import { Component, Input, Optional, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Thing, THING_TYPES } from '../../../reducers/thing';

@Component({
    selector: 'cstl-thing-modal',
    templateUrl: './thing.modal.html',
})
export class ThingModalDialogComponent implements OnInit {
    @Input() room;

    constructor(
        @Optional() @Inject(MD_DIALOG_DATA) private dialogData: any,
        private dialogRef: MdDialogRef<ThingModalDialogComponent>) {

    }

    ngOnInit(): void {
        this.room = this.dialogData;
    }

    close() {
        let r: Thing = {
            name: 'Modal Dummy',
            id: Math.random(),
            roomId: this.room.id,
            type: THING_TYPES.LIGHT,
            loading: false
        };
        this.dialogRef.close(r);
    }
}
