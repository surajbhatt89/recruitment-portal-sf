import { LightningElement , wire} from 'lwc';
import getJobOpenings from '@salesforce/apex/jobListingController.getJobOpenings';
export default class Job_listing extends LightningElement {
    jobOpenings;
    @wire(getJobOpenings)wiredJobOpenings({data,error}){
        if(data){
            this.jobOpenings = data;
        }else if(error){
            console.error(error);
        }
    }
    
}