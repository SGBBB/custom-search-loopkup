import { LightningElement  } from 'lwc';
import getAccountRecordsMethod  from '@salesforce/apex/AccountService.getAccountRecords';

export default class ImperativelyCallData extends LightningElement {
    searchKey=''
    error;
    accounts;
    handleKeyChange=(event)=>{
        this.searchKey=event.target.value;
    }
    handleClick(){
        getAccountRecordsMethod({keyword:this.searchKey})
        .then((data)=>{
            this.accounts=data;
            this.error=undefined
        })
        .catch((error)=>{
            this.accounts=undefined;
            this.error=error
        });
    }
}