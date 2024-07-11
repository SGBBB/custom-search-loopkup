 
import { LightningElement,wire,api } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import ACCOOUNT_NAME_FIELD from '@salesforce/schema/Account.Name'



export default class WirePOC extends LightningElement {
    @api recordId;

    @wire (getRecord,{recordId:"$recordId", fields:[ACCOOUNT_NAME_FIELD]} ) 
    record;

    get name(){
        
        return getFieldValue(this.record.data,ACCOOUNT_NAME_FIELD)
         
    }

}