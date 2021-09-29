import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Case.AnotherField__c',
    'Case.Id',
    'Case.Owner.Name',
    'Case.SomeField__c',
    'Case.Type',
    'Case.OwnerId'
];

export default class ListenForFields extends LightningElement {
    @api recordId;
    @wire(getRecord, {recordId: '$recordId', fields: FIELDS})
    case;
    
    get owner() {
        return this.case.data.fields.OwnerId.value;
    }

    get theCase() {
        return this.case;
    }
}