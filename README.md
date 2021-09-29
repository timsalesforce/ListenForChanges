# Test that an LWC is notified of changes to the owner, even if it asks for fields that are not on the layout

In order to test this out, you must create 2 custom fields in your Case object:

`SomeField__c`
`AnotherField__c`

Put `SomeField__c` on the Case layout, but leave `AnotherField__c` off.

Then put this LWC on the Case Record page, and change the Owner field.  You will see that the owner id is dynamically updated.