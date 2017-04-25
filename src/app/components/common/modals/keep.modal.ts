import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Keep } from '../../../reducers/keep';

@Component({
    selector: 'cstl-keep-modal',
    templateUrl: './keep.modal.html',
})
export class KeepModalDialogComponent implements OnInit {
    keep: Keep;
    keepForm: FormGroup;

    constructor(
        @Optional() @Inject(MD_DIALOG_DATA) private dialogData: any,
        private dialogRef: MdDialogRef<KeepModalDialogComponent>,
        private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.keep = this.dialogData.item;
        if (!this.keep) {
            this.keep = new Keep();
        }

        let nameCtrl = this.formBuilder.control(this.keep.name, [Validators.required]);

        this.keepForm = this.formBuilder.group({
            name: nameCtrl// ['', Validators.required]
        });
    }

    close(submit = true) {
        if (submit === true) {
            if (this.keepForm.valid) {
                this.keep.name = this.keepForm.value.name;
                this.dialogRef.close(this.keep);
            }
        } else {
            this.dialogRef.close(null);
        }
    }
}
