import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, EMPTY, finalize, Observable } from 'rxjs';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductService } from '../../../../services/product.service';
import { CartService } from '../../../../services/cart.service';
import { AuthService } from '../../../../services/auth.service';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-list-container',
  imports: [CommonModule, ProductListComponent],
  template: `
    <app-product-list
      [products]="products$ | async"
      [error]="error"
      [loading]="loading"
      [isAuthenticated]="(authState$ | async)?.isAuthenticated || false"
      (addToCart)="onAddToCart($event)"
      (refresh)="onRefresh()">
    </app-product-list>
  `
})
export class ProductListContainerComponent implements OnInit {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private authService = inject(AuthService);

  products$!: Observable<Product[]>;
  error: string | null = null;
  loading: boolean = false;

  authState$ = this.authService.getAuthState();

  constructor() {
    this.loadProducts();
  }

  private loadProducts() {
    this.loading = true;
    this.products$ = this
      .productService
      .getProducts()
      .pipe(
        catchError(error => {
          this.error = error.message || "Failed to load products";
          return EMPTY;
        }),
        finalize(() => this.loading = false)
      );
  }

  ngOnInit(): void {}

  onAddToCart(productId: number): void {
    this.cartService.addToCart(productId);
  }

  onRefresh(): void {
    this.productService.refreshCache();
    this.loadProducts();
  }
}