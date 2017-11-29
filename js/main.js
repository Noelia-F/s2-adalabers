"use strict"

var adalabers = [
	{
		name: "María",
		age: 29,
		profession: "diseñadora",
	},
	{
		name: "Lucía",
		age: 31,
		profession: "ingeniera química",
	},
	{
		name: "Susana",
		age: 34,
		profession: "periodista",
	},
	{
		name: "Rocío",
		age: 25,
		profession: "actriz",
	},
	{
		name: "Inmaculada",
		age: 21,
		profession: "diseñadora",
	},
];

function countAdalabers() {
	alert(adalabers.length);
};
function averageAge () {
	for (i=0; i<=adalabers.length; i++) {
		var adalabersAge += adalabers[i].age
	}
};
function theYoungest () {};
function countDesigners () {};
countAdalabers();
