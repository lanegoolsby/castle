import { Component, Input, Optional, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Room } from '../../../reducers/room';

@Component({
    selector: 'cstl-room-modal',
    templateUrl: './room.modal.html',
})
export class RoomModalDialogComponent implements OnInit {
    @Input() keep;

    constructor(
        @Optional() @Inject(MD_DIALOG_DATA) private dialogData: any,
        private dialogRef: MdDialogRef<RoomModalDialogComponent>) {

    }

    ngOnInit(): void {
        this.keep = this.dialogData;
    }

    close() {
        let r: Room = {
            name: 'Modal Dummy',
            id: Math.random(),
            keepId: this.keep.id,
            loading: false
        };
        this.dialogRef.close(r);
    }
}
