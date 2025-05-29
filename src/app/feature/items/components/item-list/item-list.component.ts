import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../../shared/models/Iproduct.model';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Category } from '../../../../shared/models/Icategory.model';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputFieldComponent } from '../../../../shared/components/input-field/input-field.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    RatingModule,
    FormsModule,
    ProgressSpinnerModule,
    DropdownModule,
    ButtonModule,
    InputFieldComponent,
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent implements OnInit {
  @ViewChild('dt') dt!: Table;

  allItems!: Iproduct[];
  categories: Category[] = [];
  isLoading: boolean = true;
  tableInitialized: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllItems();
    this.getAllCategories();
  }

  getAllItems() {
    this.productService.getAllProducts().subscribe((data) => {
      this.allItems = data.map((item) => ({
        ...item,
        reviews: item.rating?.rate ?? 0,
      }));

      this.isLoading = false;
    });
  }

  getAllCategories() {
    this.productService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
}
