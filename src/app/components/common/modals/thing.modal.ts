import { Component, Optional, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../reducers/root.reducer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Room } from '../../../reducers/room';
import { Thing } from '../../../reducers/thing';
import { ThingType } from '../../../reducers/thingtype';
import { ModalTypes } from '../../../lib/constants';

@Component({
    selector: 'cstl-thing-modal',
    templateUrl: './thing.modal.html',
})
export class ThingModalDialogComponent implements OnInit {
    room: Room;
    thing: Thing;
    thingForm: FormGroup;
    thingTypes$: Observable<ThingType[]>;
    selectedThingType$: Observable<ThingType>;

    constructor(
        private ngRedux: NgRedux<IAppState>,
        @Optional() @Inject(MD_DIALOG_DATA) private dialogData: any,
        private dialogRef: MdDialogRef<ThingModalDialogComponent>,
        private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.thingTypes$ = this.ngRedux.select<ThingType[]>('thingTypes');

        this.thing = this.dialogData.item;
        this.room = this.dialogData.parent;
        if (!this.thing) {
            this.thing = new Thing();
            this.thing.roomId = this.room.id;
        } else {
            this.selectedThingType$ = this.ngRedux.select<ThingType>('thingTypes').filter(t => t.id === this.thing.thingTypeId);
        }

        let nameCtrl = this.formBuilder.control(this.thing.name, [Validators.required]);
        let typeCtrl = this.formBuilder.control(this.thing.thingTypeId, [Validators.required]);

        this.thingForm = this.formBuilder.group({
            name: nameCtrl,
            type: typeCtrl
        });
    }

    close(submit = true) {
        if (submit === true) {
            if (this.thingForm.valid) {
                this.thing.name = this.thingForm.value.name;
                this.thing.thingTypeId = this.thingForm.value.type;
                if (this.room.id) {
                    this.thing.roomId = this.room.id;
                }
                this.dialogRef.close({
                    type: ModalTypes.THING,
                    data: this.thing
                });
            }
        } else {
            this.dialogRef.close(null);
        }
    }
}
