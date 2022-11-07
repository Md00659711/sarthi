import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';
@NgModule({
    declarations:[LoginComponent],
    imports: [
        CommonModule,
        LoginRouting,
        ReactiveFormsModule
        
    ],

})
export class LoginModule { }  