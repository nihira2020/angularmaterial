import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input"
import {MatSelectModule} from "@angular/material/select"
import {MatAutocompleteModule} from "@angular/material/autocomplete"

@NgModule({
exports:[
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule
]
})
export class MaterialModule{}