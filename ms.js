"use strict";
let animals = {
	eat:true,
};
let cow ={
	reproduction:true,
};
cow._proto_=animals;
alert(animals.reproduction);