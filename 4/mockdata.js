#!/usr/local/bin/node
const fs = require('fs');
const https = require('https');

const start = new Date(2015, 0, 1).getTime();
const endDate = new Date(2017, 11, 1).getTime();

const numInvoices = 2000;
const numDebtors = 1000;
const numUsers = 50;
const numCompanies = 25;
const numSubsidiaries = 10;
const numActivities = 4000;

let debtorData = "";
https.get('https://randomuser.me/api/?results=' + numDebtors, response => {
	response.on('data', data => {
		debtorData = debtorData + data;
	});

	response.on('end', () => {

		const invoices = Array(numInvoices).fill({}).map((e, idx) => {
			const invoiceDate = (new Date(start + Math.random() * (endDate - start))).getTime();
			const dueDate = (new Date(invoiceDate + Math.random() * (endDate - invoiceDate))).getTime();
			const isPayed = Math.random() < 0.5;
			const paymentDate = isPayed ? (new Date(invoiceDate + Math.random() * (endDate - invoiceDate))).getTime() : 0;
			const delay = paymentDate > dueDate ? paymentDate - dueDate : 0;

			return {
				"_id": idx,
				"_debtorid": Math.floor(Math.random() * 1000),
				"amount": Math.floor(Math.random() * 50000),
				"invoiceDate": invoiceDate,
				"dueDate": dueDate,
				"paymentDate": paymentDate,
				"isPayed": isPayed,
				"Delay": delay,
			};
		});

		const debtors = JSON.parse(debtorData).results.map((debtor, idx) => {
			const invoicesToDebtor = invoices.filter(invoice => invoice._debtorid === idx);

			const totalOutstanding = invoicesToDebtor.filter(invoice => !invoice.isPayed)
				.reduce((total, invoice) => total + invoice.amount, 0);

			const lastInvoiceDate = invoicesToDebtor.reduce((recent, invoice) =>
				recent > invoice.invoiceDate ? recent : invoice.invoiceDate, start);

			return {
				"_id": idx, // = DebtorNumber
				"name": debtor.name.title + " " + debtor.name.first + " " + debtor.name.last,
				"address": debtor.location,
				"email": debtor.email,
				"phoneNumber": debtor.phone,
				"APD": Math.floor(Math.random() * 120),
				"DSO": Math.floor(Math.random() * 120),
				"country": debtor.nat,
				"totalOutstanding": totalOutstanding,
				"lastInvoiceDate": lastInvoiceDate,
			};
		});

		fs.writeFile('invoices.json', JSON.stringify(invoices), err => {
			if (err) console.log('Error writing invoices: ', err);
			else console.log('invoices.json written');
		});

		fs.writeFile('debtors.json', JSON.stringify(debtors), err => {
			if (err) console.log('Error writing debtors: ', err);
			else console.log('debtors.json written');
		});

	});
});

let userData = "";
https.get('https://randomuser.me/api/?results=' + numUsers, response => {
	response.on('data', data => {
		userData = userData + data;
	});

	response.on('end', () => {
		const users = JSON.parse(userData).results.map((user, idx) => {

			return {
				"_id": idx,
				"_companyid": Math.floor(Math.random() * numCompanies),
				"name": user.name.first + " " + user.name.last,
				"email": user.email,
			};
		});

		fs.writeFile('users.json', JSON.stringify(users), err => {
			if (err) console.log('Error writing users: ', err);
			else console.log('users.json written');
		});
	});
});

let companyData = "";
https.get('https://randomuser.me/api/?results=' + numCompanies, response => {
	response.on('data', data => {
		companyData = companyData + data;
	});

	response.on('end', () => {
		const companies = JSON.parse(companyData).results.map((company, idx) => {
			return {
				"_id": idx,
				"name": company.name.first + " BV",
				"creditLimit": Math.floor(Math.random() * 200000),
				"credit": Math.floor(Math.random() * 19999),
				"address": company.location,
			};
		});

		fs.writeFile('companies.json', JSON.stringify(companies), err => {
			if (err) console.log('Error writing companies: ', err);
			else console.log('companies.json written');
		});
	});
});

let subsidiaryData = "";
https.get('https://randomuser.me/api/?results=' + numSubsidiaries, response => {
	response.on('data', data => {
		subsidiaryData = subsidiaryData + data;
	});

	response.on('end', () => {
		const subsidiaries = JSON.parse(subsidiaryData).results.map((subsidiary, idx) => {

			return {
				"_id": idx,
				"_companyid": Math.floor(Math.random() * numCompanies),
				"name": subsidiary.name.first + " BV",
			};
		});

		fs.writeFile('subsidiaries.json', JSON.stringify(subsidiaries), err => {
			if (err) console.log('Error writing subsidiary: ', err);
			else console.log('subsidiaries.json written');
		});
	});
});

let activityData = "";
https.get('https://randomuser.me/api/?results=' + numActivities, response => {
	response.on('data', data => {
		activityData = activityData + data;
	});


	response.on('end', () => {
		const activities = JSON.parse(activityData).results.map((activity, idx) => {
			const events = ['category', 'invoice', 'debtor'];
			const categories = ['Portfolio deviation', 'Debtor deviation', 'Invoice optimalisation', 'Payment delay', 'Payment cancellation'];
			const eventTypeNr = Math.floor(Math.random() * 3);
			const eventType = events[eventTypeNr];
			const categoryNameNr = (eventTypeNr === 0) ? Math.floor(Math.random() * categories.length) : undefined;
			const categoryName = (eventTypeNr === 0) ? categories[categoryNameNr] : undefined;
			const invoiceNumber = (eventTypeNr === 1) ? Math.floor(Math.random() * numInvoices) : undefined;
			const debtorNumber = (eventTypeNr === 2) ? Math.floor(Math.random() * numDebtors) : undefined;
			return {
				"_id": idx,
				"eventType": eventType,
				"title": "Activiteit " + idx,
				"subtitle": "Referentiecode: " + activity.login.sha1,
				"description": "Lorem ipsum",
				"isRead": Math.random() < 0.5,
				"date": (new Date(start + Math.random() * (endDate - start))).getTime(),
				"categoryType": categoryNameNr,
				"categoryName": categoryName,
				"invoiceNumber": invoiceNumber,
				"debtorNumber": debtorNumber,
			};
		});

		fs.writeFile('activities.json', JSON.stringify(activities), err => {
			if (err) console.log('Error writing activities: ', err);
			else console.log('activities.json written');
		});
	});
});






















