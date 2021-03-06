﻿/*
* This class is used for different kind of validations 
* like email, url, date, number etc.
*
* Depends:
*	raghav.js
*
* Usage:
*	RAGHAV.Validate.date('12/01/2011');
*	RAGHAV.Validate.isoDate('2009-09-28T19:03:12Z');
*	RAGHAV.Validate.number(23.43);
*	RAGHAV.Validate.alphaNumeric('ABC12');
*	RAGHAV.Validate.alpha('ABC');
*	RAGHAV.Validate.digits('1234');	
*	RAGHAV.Validate.email('abcd.efg@xyz.com');
*	RAGHAV.Validate.url('http://websitetocheck.com/');
*/


RAGHAV.Validate = (function() {
	var my = {
		alpha: function(value) {
			///	<summary>
			///		Checks whether the specified string is an alphabet or not.
			///	</summary>
			///	<param name="value" type="String">The string to check</param>
			///	<returns type="Boolean">True if the parameter is an alphabet; otherwise false.</returns>
			return /^[a-z]+$/i.test(value);
		},
		alphaNumeric: function(value) {
			///	<summary>
			///		Checks whether the specified string is alpha numeric only or not.
			///	</summary>
			///	<param name="value" type="String">The string to check</param>
			///	<returns type="Boolean">True if the parameter is alpha numeric only; otherwise false.</returns>
			return /^[a-z0-9]+$/i.test(value);
		},
		date: function(value) {
			///	<summary>
			///		Checks whether the specified string is a valid date or not.
			///	</summary>
			///	<param name="value" type="String">The string to check</param>
			///	<returns type="Boolean">True if the parameter is a valid date; otherwise false.</returns>		
			return !/Invalid|NaN/.test(new Date(value));
		},
		digits: function(value) {
			///	<summary>
			///		Checks whether the specified string is a valid digits or not.
			///	</summary>
			///	<param name="value" type="String">The string to check</param>
			///	<returns type="Boolean">True if the parameter is a valid digits; otherwise false.</returns>								
			return this.optional(element) || /^\d+$/.test(value);
		},
		email: function(value) {
			///	<summary>
			///		Checks whether the specified string is a valid email or not.
			///	</summary>
			///	<param name="value" type="String">The string to check</param>
			///	<returns type="Boolean">True if the parameter is a valid email; otherwise false.</returns>
			return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
		},
		isoDate: function(value) {
			///	<summary>
			///		Checks whether the specified string is a valid iso date or not.
			///	</summary>
			///	<param name="value" type="String">The string to check</param>
			///	<returns type="Boolean">True if the parameter is a valid iso date; otherwise false.</returns>				
			return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
		},
		number: function(value) {
			///	<summary>
			///		Checks whether the specified number is a valid number or not.
			///	</summary>
			///	<param name="value" type="Number">The number to check</param>
			///	<returns type="Boolean">True if the parameter is a valid number; otherwise false.</returns>
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		url: function(value) {
			///	<summary>
			///		Checks whether the specified string is a valid url or not.
			///	</summary>
			///	<param name="value" type="String">The string to check</param>
			///	<returns type="Boolean">True if the parameter is a valid email; otherwise false.</returns>
			return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		}

	}; //end my
	return my;
} ());



	