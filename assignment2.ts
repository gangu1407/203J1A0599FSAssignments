//task 1
//assignment.component.ts
import { Component } from "@angular/core";
import { Dataservice } from "./assignment2.services";


@Component({
    selector:'data',
    template:
    `
        <h1>Items : {{title}}</h1>
        <ul>
        <li *ngFor='let n of item;let i=index'>
        <h2>Item {{i+1}}</h2>
        <h3>{{ item[i] }} :  {{ description[i]}}</h3>
        </li>
        </ul>
    `
})
export class DataComponent
{
     title="list of daily items"
     item=['Milk  ','Choco','Water '];
     description=['Protein Source','A Creamy Bar','A Living Source'];
}
//task 2
//assignment.service.ts
export class Dataservice
{
    getitems()
    {
        var arr1=['Milk  ','Chocolate','Water '];
        return arr1;
    }
    getdescriptions()
    {
        var arr2=['Protein Source','A Creamy Bar','A Living Source'];
        return arr2;
    }
}
// task 3
//assignment.component.ts
import { Component } from "@angular/core";
import { Dataservice } from "./assignment2.services";


@Component({
    selector:'data',
    template:
    `
        <h1>Items : {{title}}</h1>
        <ul>
        <li *ngFor='let n of item;let i=index'>
        <h2>Item {{i+1}}</h2>
        <h3>{{ item[i] }} :  {{ description[i]}}</h3>
        </li>
        </ul>
    `
})
export class DataComponent{
     title="list of daily items"
     item:any;
     description:any;
     constructor(dn:Dataservice)
     {
        this.item=dn.getitems();
        this.description=dn.getdescriptions();
     }

}
//assignment.service.ts
export class Dataservice
{
    getitems()
    {
        var arr1=['Milk  ','Chocolate','Water '];
        return arr1;
    }
    getdescriptions()
    {
        var arr2=['Protein Source','A Creamy Bar','A Living Source'];
        return arr2;
    }
}
//app.component.module.ts
<h1>Angular</h1>
<data></data>

OUTPUT

Angular
Items : list of daily items
Item 1
Milk : Protein Source
Item 2
Chocolate : A Creamy Bar
Item 3
Water : A Living Source
