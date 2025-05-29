import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../../shared/models/Iproduct.model';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    SkeletonModule,
    ButtonComponent,
    AddEditProductComponent,
    RatingModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  @ViewChild('addEditModal') addEditModal!: AddEditProductComponent;
  productDetails!: Iproduct;
  productId: number;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productId = Number(this.activateRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    this.productService.getProductDetails(this.productId).subscribe((res) => {
      this.productDetails = res;
    });
  }
  showDialog(product: Iproduct) {
    this.addEditModal.open(product);
  }
}
