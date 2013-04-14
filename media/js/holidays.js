var SHOP_HOLIDAYS_2012 = [
	{
		title: "Easter Friday",
		date:"March 29, 2013 23:59:59",
		open: false
	},{
		title: "Easter Monday",
		date:"March 29, 2013 23:59:59",
		open: true,
		time_open: "7:30am",
		time_closed: "12:00pm"

	},{
		title: "Al's Birthday",
		date: "April 25, 2013",
		open: true,
		time_open: "7:30am",
		time_closed: "3:30pm"
	},{
		title: "Christmas Break",
		date_start: "Decemeber 24, 2013",
		date_end: "January 1, 2013",
		open: false
	},{
		title: "Christmas Break",
		date_start: "Decemeber 24, 2013",
		date_end: "January 1, 2013",
		open: false
	}
]

function NextHoliday(){
	//Returns the next holiday coming up, or whatever holiday we are celebrating
	var today = new Date()
	var i=-1;
	var test_next_date = true;
	while (test_next_date){
		i++;
		if (SHOP_HOLIDAYS_2012[i].hasOwnProperty(date)){
			if (new Date(SHOP_HOLIDAYS_2012[i].date.concat(" 23:59:59")) > today){
				test_next_date = false;
			}
		}else{
			if (new Date(SHOP_HOLIDAYS_2012[i].date_end.concat(" 23:59:59")) > today){
				test_next_date = false;
			}
		}	
	}
	return SHOP_HOLIDAYS_2012[i]
}

console.log(NextHoliday())