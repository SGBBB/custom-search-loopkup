import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class Lds extends LightningElement {
    @wire(getListUi, { objectApiName: ACCOUNT_OBJECT, listViewApiName: 'AllAccounts' })
    accounts=null;
 
    get accountList() {
        console.log('inside accountList method');

        return this.accounts.data ?  []: this.accounts.data.records.records;
        
    }

    connectedCallback(){
        console.log('inside connected callback');
        
 
    }

}

 


 
 