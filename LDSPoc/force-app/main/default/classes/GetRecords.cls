public with sharing class GetRecords {
    public GetRecords() {

    }
    
    @AuraEnabled
    public static list<Account> getAccounts(){
        return [Select id,Name,Phone from Account ]; 
    }
}