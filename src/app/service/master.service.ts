import { Injectable } from '@angular/core';
import { colorentity } from '../Entity/colorentity';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  GetColorList():colorentity[]{
   return[
    {code:'c0',name:'black'},
    {code:'c1',name:'Red'},
    {code:'c2',name:'Green'},
     {code:'c3',name:'Yellow'},
     {code:'c4',name:'White'}
   ]
  }

}
