var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        redirectTo: 'splash',
        pathMatch: 'full'
    },
    {
        path: 'initializing',
        loadChildren: './initializing/initializing.module#InitializingPageModule'
    },
    {
        path: 'salesmanlogin',
        loadChildren: './salesman/login/login.module#LoginPageModule'
    },
    {
        path: 'catalog/:type',
        loadChildren: './salesman/catalog/catalog.module#CatalogPageModule'
    },
    {
        path: 'item-list/:SortID',
        loadChildren: './salesman/item-list/item-list.module#ItemListPageModule'
    },
    {
        path: 'item-detail',
        loadChildren: './salesman/item-detail/item-detail.module#ItemDetailPageModule'
    },
    {
        path: 'dashboard',
        loadChildren: './salesman/dashboard/dashboard.module#DashboardPageModule'
    },
    {
        path: 'clients/:type',
        loadChildren: './salesman/clients/clients.module#ClientsPageModule'
    },
    {
        path: 'client-detail-tabs',
        loadChildren: './salesman/client-detail-tabs/client-detail-tabs.module#ClientDetailTabsPageModule'
    },
    {
        path: 'sales-order-list',
        loadChildren: './salesman/sales-order-list/sales-order-list.module#SalesOrderListPageModule'
    },
    {
        path: 'sales-order-detail',
        loadChildren: './salesman/sales-order-detail/sales-order-detail.module#SalesOrderDetailPageModule'
    },
    {
        path: 'splash',
        loadChildren: './splash/splash.module#SplashPageModule'
    },
    {
        path: 'invoices',
        loadChildren: './salesman/invoices/invoices.module#InvoicesPageModule'
    },
    {
        path: 'invoice-detail',
        loadChildren: './salesman/invoice-detail/invoice-detail.module#InvoiceDetailPageModule'
    },
    {
        path: 'create-sales-order',
        loadChildren: './salesman/create-sales-order/create-sales-order.module#CreateSalesOrderPageModule'
    },
    {
        path: 'add-items/:SortID',
        loadChildren: './salesman/add-items/add-items.module#AddItemsPageModule'
    },
    { path: 'collections', loadChildren: './salesman/collections/collections.module#CollectionsPageModule' },
    { path: 'collections-detail', loadChildren: './salesman/collections-detail/collections-detail.module#CollectionsDetailPageModule' },
    { path: 'event-create', loadChildren: './salesman/event-create/event-create.module#EventCreatePageModule' },
    { path: 'calender', loadChildren: './salesman/calender/calender.module#CalenderPageModule' },
    { path: 'client-create', loadChildren: './salesman/client-create/client-create.module#ClientCreatePageModule' },
    { path: 'collections-tabs', loadChildren: './salesman/collections-tabs/collections-tabs.module#CollectionsTabsPageModule' },
    { path: 'order-upload', loadChildren: './salesman/order-upload/order-upload.module#OrderUploadPageModule' },
    { path: 'collections-detail-header', loadChildren: './salesman/collections-detail-header/collections-detail-header.module#CollectionsDetailHeaderPageModule' },
    { path: 'collections-detail-cash', loadChildren: './salesman/collections-detail-cash/collections-detail-cash.module#CollectionsDetailCashPageModule' },
    { path: 'collections-detail-check', loadChildren: './salesman/collections-detail-check/collections-detail-check.module#CollectionsDetailCheckPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map