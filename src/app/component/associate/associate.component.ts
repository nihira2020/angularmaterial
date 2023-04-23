import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Country } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent implements OnInit {

  associatellist: any;
  addressarray !: FormArray<any>;
  countrylist !: Country[];
  filteroptions !: Observable<Country[]>
  editdata: any;

  constructor(private builder: FormBuilder, private service: MasterService) {

  }
  ngOnInit(): void {
    this.LoadAssociate();
    this.LoadCountry();
  }

  myform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    address: this.builder.array([])
  })
  Saveassociate() {
    // console.log(this.myform.value);
    this.service.SaveAssociate(this.myform.value, this.myform.value.id).subscribe(r => {
      alert('Saved');
    });
  }

  LoadAssociate() {
    this.service.GetAssociate().subscribe(item => {
      this.associatellist = item;
    });
  }
  LoadCountry() {
    this.service.GetCountry().subscribe(item => {
      this.countrylist = item;
    });
  }
  autochange(index: any) {
    this.addressarray = this.myform.get("address") as FormArray;
    const addobj = this.addressarray.at(index) as FormGroup;
    const _control = addobj.get("country") as FormControl;
    this.filteroptions = _control.valueChanges.pipe(
      startWith(''), map(value => this._Listfilter(_control.value || ''))
    )

  }
  private _Listfilter(value: string): Country[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.countrylist.filter(option => option.name.toLocaleLowerCase().includes(searchvalue) ||
      option.code.toLocaleLowerCase().includes(searchvalue));
  }

  addaddress() {
    const associate = this.myform.value.id;
    if (associate != '') {
      this.addressarray = this.myform.get("address") as FormArray;
      this.addressarray.push(this.createaddrow())
    } else {
      alert('Please choose associate')
    }
  }
  createaddrow() {
    return this.builder.group({
      title: this.builder.control(''),
      country: this.builder.control(''),
      fulladdress: this.builder.control('')
    })
  }

  get getaddress() {
    return this.myform.get("address") as FormArray;
  }

  cuschange(code: any) {
    this.service.GetAssociatebycode(code).subscribe(res => {
      this.editdata = res;

      this.addressarray=this.myform.get("address") as FormArray;
      while (this.addressarray.length !== 0) {
        this.addressarray.removeAt(0)
      }
      
      for (let i = 0; i < this.editdata.address.length; i++){
        this.addaddress();
      }
      this.myform.setValue({ id: this.editdata.id, name: this.editdata.name, address: this.editdata.address });
    });
  }

}
