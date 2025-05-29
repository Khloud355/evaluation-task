import { Component, input, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProductService } from '../../../services/product.service';
import { Category } from '../../../../shared/models/Icategory.model';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Iproduct } from '../../../../shared/models/Iproduct.model';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../../shared/components/input-field/input-field.component';
@Component({
  selector: 'app-add-edit-product',
  standalone: true,
  imports: [
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputFieldComponent,
    DropdownModule,
    ButtonComponent,
    ToastModule,
    CommonModule,
  ],
  providers: [MessageService],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.scss',
})
export class AddEditProductComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private messageService: MessageService
  ) {}

  categories: Category[] = [];
  addEditForm!: FormGroup;
  display: boolean = false;
  product!: Iproduct;
  modelTitle: string = '';
  buttonText: string = '';
  addMode: boolean = true;
  imageUploaded: any;

  open(product?: Iproduct) {
    this.display = true;

    if (product == undefined) {
      this.addMode = true;
      this.modelTitle = 'Add New Product';
      this.buttonText = 'Add Product';
    } else {
      this.product = product;
      this.addMode = false;
      this.modelTitle = 'Edit Product';
      this.buttonText = 'Edit Product';
      this.addEditForm.setValue({
        title: this.product.title,
        price: this.product.price,
        description: this.product.description,
        category: this.product.category,
        image: this.product.image,
      });
    }
  }

  close() {
    this.display = false;
  }

  ngOnInit(): void {
    this.intaiteForm();
    this.getAllCategories();
  }

  intaiteForm() {
    this.addEditForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: [],
    });
  }

  getAllCategories() {
    this.productService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Message Content',
    });
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Product added successfully',
    });
  }

  showInfo() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Product Added successfully',
    });
  }

  dataSubmited() {
    if (this.addMode && this.addEditForm.valid) {
      const formValue = { ...this.addEditForm.value };
      delete formValue.image;

      const data = {
        ...formValue,
        image: this.imageUploaded,
      };
      this.productService.AddNewProduct(data).subscribe((res) => {
        this.showSuccess();
      });
    } else {
      this.productService
        .EditProduct(this.product.id, this.addEditForm.value)
        .subscribe(
          (res) => {
            this.showInfo();
            this.router.navigate(['/products']);
          },
          (error) => {}
        );
    }
    this.addEditForm.reset();
    this.close();
  }

  selectedFile?: File | string;
  formData: FormData = new FormData();
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.formData = new FormData();
      this.formData.append('image', this.selectedFile);
      for (const [key, value] of (this.formData as any).entries()) {
        this.imageUploaded = value;
      }
    }
  }
}
