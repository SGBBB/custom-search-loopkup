public   class AccountService {
     
    
    @auraEnabled  //We dont need ot use @AuraEnabled( cacheable=true ) for imperative callouts,imperative callouts like calling method on click of a button
    public static List<Account> getAccountRecords(String keyword){
        string strKey='%'+keyword +'%';
        return [select id,Name from Account where name LIKE:strKey ];

    }
    
}