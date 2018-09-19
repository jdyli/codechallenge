# Mock data
In every data analysis project you need data. This script makes a .csv file that contains mock data of invoices. 
The data structure is as follows: 
There is a set of debtors, where each debtor can have a list of invoices, linked by invoice._debtorid === idx. An invoice is at the same time connected to a certain category. A user is part of a company. These companies are also linked to subsidiaries and is linked via a _companyid.

## Learning goals
- How to make a fast, generic data set?

## Run
node mockdata.js

## Technology
- Javascript

