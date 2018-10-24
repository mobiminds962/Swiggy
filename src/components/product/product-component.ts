import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'product-component',
    templateUrl: './product-component.html',
    styleUrls: ['./product-component.scss']
})
export class ProductComponent {
	@Input() product: any = {};
    constructor(private router: Router) {
    }

    ngAfterContentChecked() {
        
    }
}