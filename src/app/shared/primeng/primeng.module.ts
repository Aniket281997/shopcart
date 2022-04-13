import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { AccordionModule } from 'primeng/accordion';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
  declarations: [],
  imports: [
    AccordionModule,
    CommonModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    InputNumberModule,
    FileUploadModule,
    HttpClientModule,
    TableModule,
    DropdownModule
  ],
  exports: [
    AccordionModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    InputNumberModule,
    FileUploadModule,
    HttpClientModule,
    TableModule,
    DropdownModule
  ],
})
export class PrimengModule {}
