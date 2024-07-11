import { LightningElement,wire,api } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import ACCOOUNT_NAME_FIELD from '@salesforce/schema/Account.Name'
 



export default class WirePOCWithMethods extends LightningElement {
    @api recordId;
    record;
    error;


    @wire (getRecord,{recordId:"$recordId", fields:[ACCOOUNT_NAME_FIELD]} ) 
    wiredAccount({error,data}){
        if(error){
            console.log('inside error block');
            this.record=null;
            this.error=undefined;
        }else if(data){
            console.log('inside data block');
            this.record=data
            this.error=undefined;
            // console.log('flag1'+this.record.fields.Name.value);
        }
    };

    get name(){
        
        return getFieldValue(this.record,ACCOOUNT_NAME_FIELD);
        // return this.record.fields.Name.value;
         
    }

    get accountName(){
        return this.recordId;
    }

}