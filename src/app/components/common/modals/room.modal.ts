import { Component, Optional, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Room } from '../../../reducers/room';
import { Keep } from '../../../reducers/keep';

@Component({
    selector: 'cstl-room-modal',
    templateUrl: './room.modal.html',
})
export class RoomModalDialogComponent implements OnInit {
    room: Room;
    keep: Keep;
    roomForm: FormGroup;

    constructor(
        @Optional() @Inject(MD_DIALOG_DATA) private dialogData: any,
        private dialogRef: MdDialogRef<RoomModalDialogComponent>,
        private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.room = this.dialogData.item;
        this.keep = this.dialogData.parent;
        if (!this.room) {
            this.room = new Room();
            this.room.keepId = this.keep.id;
        }

        let nameCtrl = this.formBuilder.control(this.room.name, [Validators.required]);

        this.roomForm = this.formBuilder.group({
            name: nameCtrl
        });
    }

    close(submit = true) {
        if (submit === true) {
            if (this.roomForm.valid) {
                this.room.name = this.roomForm.value.name;
                if (this.keep.id) {
                    this.room.keepId = this.keep.id;
                }
                this.dialogRef.close(this.room);
            }
        } else {
            this.dialogRef.close(null);
        }
    }
}
