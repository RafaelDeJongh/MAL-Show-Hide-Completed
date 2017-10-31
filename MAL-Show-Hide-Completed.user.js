// MAL Show/Hide Completed - Person Pages
// Rafaël De Jongh
// Copyright (c) 2017
// This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
// https://creativecommons.org/licenses/by-nc-sa/4.0/
//
// --------------------------------------------------
//
// ==UserScript==
// @version       1.0
// @editdate      31/10/2017
// @author        Rafaël De Jongh
// @namespace     https://www.rafaeldejongh.com
// @name          My Anime List (MAL) - Show/Hide Completed Anime on Person pages
// @require       https://code.jquery.com/jquery-3.1.1.min.js
// @include       *://myanimelist.net/people/*
// @description   This script adds the option show or hide completed anime on Person Pages from MAL.
// ==/UserScript==

$('.normal_header').first().append(' - Show/Hide Completed: <input id="cmpcheck" type="checkbox" title="Show/Hide Completed" name="cmpcheck">');
var checkboxChecker = localStorage.getItem("cmpcheck"),
	completedItems = $("a[title=Completed]").closest("tr");
if(checkboxChecker !== null){$("#cmpcheck").attr("checked","checked");}
if($("#cmpcheck").is(':checked')){completedItems.hide();}else{completedItems.show();}
$('#cmpcheck').on("click", function(){
	if($(this).is(':checked')){
		completedItems.hide();
		localStorage.setItem("cmpcheck", $(this).val());
	}else{
		completedItems.show();
		localStorage.removeItem("cmpcheck");
	}
});
