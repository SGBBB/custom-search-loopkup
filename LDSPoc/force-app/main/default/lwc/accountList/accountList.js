
// accountsList.js
import { LightningElement, api, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/GetRecords.getAccounts'
 

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
];


export default class AccountsList extends LightningElement {

     
    
    connectedCallback(){
         
        getAccounts()
		.then(result => {
			this.data = result;
		})
		.catch(error => {
            console.log('error');
		})



    }
    

    @track data;
    @api columns = columns;

}
