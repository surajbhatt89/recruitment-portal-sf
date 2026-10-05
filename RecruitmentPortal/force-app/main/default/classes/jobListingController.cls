public with sharing class jobListingController {
    @AuraEnabled(cacheable=true)
    public static List<JobOpening> getJobOpenings(Id recordId){
        List<JobOpening> jobOpenings = [Select Id , Experience__c, Name, Required_Skills__c, 
        Salary_Range__c, Status__c from Job_Opening__c];

        return jobOpenings;
    }

}