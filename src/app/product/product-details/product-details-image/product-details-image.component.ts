import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
// -----------------------------
// MODELS
// -----------------------------
import {Product} from '../../product';

@Component({
    selector: 'product-details-image',
    templateUrl: './product-details-image.component.html',
    styleUrls: ['./product-details-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsImageComponent implements OnInit {
    public fileUrl = null;
    public fileChanged: boolean = false;
    public fileName = null;

    constructor() {
    }

    ngOnInit() {
    }


    onSelectFile(event) {
        // this.fileChanged = true;
        // if (event.target.files && event.target.files[0]) {
        //     var reader = new FileReader();
        //     reader.readAsDataURL(event.target.files[0]);
        //     reader.onload = (final) => {
        //         this.product.file = event.target.files[0];
        //         this.fileUrl = final.target['result'];
        //         this.fileName = event.target.files[0].name;
        //     }
        // }
    }

    removeFile() {
        // this.myInputVariable.nativeElement.value = "";
        // this.fileName = '';
        // this.fileUrl = '';
        // this.product.file = null;
    }


}
