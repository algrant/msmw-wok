var SHOP_HOLIDAYS_2015 = [
	{
		title: "Family Day",
		date:"February 9, 2015",
		open: false,
		pre_tag: "We'll be closed for Family Day, Mon Feb 9.",
		tag: "Closed for Family Day! Regular hours resume tomorrow."
	},{
		title: "Good Friday",
		date:"April 3, 2015",
		open: false,
		pre_tag: "We'll be closed for Good Friday, April 3.",
		tag: "Closed for Good Friday!"
	},{
		title: "Easter Monday",
		date:"April 6, 2015",
		open: false,
		pre_tag: "We'll be closed for Easter Monday, April 6.",
		tag: "Closed for Easter Monday! Regular hours resume tomorrow."
	},{
		title: "Victoria Day",
		date:"May 18, 2015",
		open: false,
		pre_tag: "We'll be closed for Victoria Day, Mon May 18.",
		tag: "Closed for Victoria Day! Regular hours resume tomorrow."
	},{
		title: "Canada Day",
		date:"July 1, 2015",
		open: false,
		pre_tag: "We'll be closed for Canada Day, Wed July 1.",
		tag: "Closed for Canada Day! Regular hours resume tomorrow."
	},{
		title: "British Columbia Day",
		date:"August 3, 2015",
		open: false,
		pre_tag: "We'll be closed for BC Day, Mon Aug 3.",
		tag: "Closed for BC Day! Regular hours resume tomorrow."
	},{
		title: "Labour Day",
		date:"September 7, 2015",
		open: false,
		pre_tag: "We'll be closed for Labour Day, Mon Sep 7.",
		tag: "Closed for Labour Day! Regular hours resume tomorrow."
	},{
		title: "Thanksgiving Day",
		date:"October 12, 2015",
		open: false,
		pre_tag: "We'll be closed for Thanksgiving Day, Mon Oct 12.",
		tag: "Closed for Thanksgiving Day! Regular hours resume tomorrow."
	},{
		title: "Remembrance Day",
		date:"Nov 11, 2015",
		open: false,
		pre_tag: "We'll be closed for Remembrance Day, Wed Nov 11.",
		tag: "Closed for Remembrance Day. Regular hours resume tomorrow."
	},{
		title: "Christmas Break",
		date_start: "Decemeber 19, 2014",
		date_end: "January 4, 2015",
		open: false,
		pre_tag:"We'll be closed for the holidays, Dec 19 - Jan 4.",
		tag: "Closed for the holidays. Regular hours resume Tue Jan 5."
	}
]

function NextHoliday(today){
	//Returns the next holiday coming up, or whatever holiday we are celebrating
	
	var i=-1;
	var test_next_date = true;
	while (test_next_date){
		i++;
		
		if (SHOP_HOLIDAYS_2015[i].hasOwnProperty("date")){
			if (new Date(SHOP_HOLIDAYS_2015[i].date.concat(" 23:59:59")) > today){
				test_next_date = false;
			}
		}else{
			if (new Date(SHOP_HOLIDAYS_2015[i].date_end.concat(" 23:59:59")) > today){
				test_next_date = false;
			}
		}
		if(i == SHOP_HOLIDAYS_2015.length-1){
			test_next_date = false;
		}
	}
	return SHOP_HOLIDAYS_2015[i]
}

function areWeOpen(someDate) {

	var areWeOpen = true;
	var message = "We are open"
	if(someDate.getDay() == 0 || someDate.getDay() == 6){
		areWeOpen = false;
		message = "We are closed for the weekend.";
	}else if (someDate.getHours() < 7 || (someDate.getHours() == 7 && someDate.getMinutes() < 30 ) ||
			  someDate.getHours() > 15 || (someDate.getHours() == 15 && someDate.getMinutes() > 30 )){
		areWeOpen = false;
		message = "We are closed for the night.";
	}else {
		//check if it's a holiday
		var i=-1;
		var test_next_date = true;
		while(test_next_date){
			i++;

			if (SHOP_HOLIDAYS_2015[i].hasOwnProperty("date")){
				var holistart = new Date(SHOP_HOLIDAYS_2015[i].date.concat(" 00:00:01"))
				var holiend = new Date(SHOP_HOLIDAYS_2015[i].date.concat(" 23:59:59"));
				if (holistart < someDate && someDate < holiend){
					test_next_date = false;
					areWeOpen = false;
					message = SHOP_HOLIDAYS_2015[i].tag;
				}
			}else{
				var holistart = new Date(SHOP_HOLIDAYS_2015[i].date_start.concat(" 00:00:00"))
				var holiend = new Date(SHOP_HOLIDAYS_2015[i].date_end.concat(" 23:59:59"));
				if (holistart < someDate && someDate < holiend){
					test_next_date = false;
					areWeOpen = false;
					message = SHOP_HOLIDAYS_2015[i].tag;
				}
			}
			if(i == SHOP_HOLIDAYS_2015.length-1){
				test_next_date = false;
			}
		}


	}

	console.log(someDate);
	return [areWeOpen,message];
}