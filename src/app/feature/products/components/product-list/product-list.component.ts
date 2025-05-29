import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { Iproduct } from '../../../../shared/models/Iproduct.model';
import { ProductService } from '../../../services/product.service';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogModule } from 'primeng/dialog';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    AddEditProductComponent,
    CommonModule,
    SkeletonModule,
    CardComponent,
    DialogModule,
    ButtonComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  @ViewChild('addEditModal') addEditModal!: AddEditProductComponent;

  allProductData: Iproduct[] = [];
  isLoading: boolean = true;

  constructor(private productService: ProductService) {} // dependancy injection

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((res: Iproduct[]) => {
      this.allProductData = res;

      this.isLoading = false;
    });
  }

  showDialog() {
    this.addEditModal.open();
  }
}
