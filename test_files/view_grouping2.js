var oFieldTypes;
var oOptionList;
var arFieldList;
var bAddFieldModeOn = false;
var iAddFieldRowCount = 0;
var iAddFieldUniqueIndex = 0;
var giMenuVisible = false;
var SelectedRowId = null;
var AboveOrBelow = false; // above=true, below=false
var OriginalRowClass = '';
var SelectedRowGIID = null;
var DeleteIconPath;
var FieldNameText;
var confirmUnsaved;
var confirmText;
var donationDriverAmount = 0;
var fixedFirstPaymentAmount = 0;
var hasDesignations = false;
var onInputIsSupported = false;
var eachPayment = 0;
var numPayments = 0;
function TableRow_HoverIn(prmTableRow, prmInstanceId)
{
	if (!giMenuVisible)
	{
		//OriginalRowClass = prmTableRow.className;
		prmTableRow.className = 'hovered';
		//show grouping instance toolbar
		var tb = document.getElementById('spGITB_' + prmInstanceId);
		tb.style.visibility = 'visible';
		SelectedRowGIID = prmInstanceId;
	}
} // TableRow_HoverIn


function TableRow_HoverOut(prmTableRow, prmInstanceId)
{
	if (!giMenuVisible)
	{
		//prmTableRow.className = OriginalRowClass;
		prmTableRow.className = '';
		//hide grouping instance toolbar
		var tb = document.getElementById('spGITB_' + prmInstanceId);
		tb.style.visibility = 'hidden';
		SelectedRowGIID = null;
	}
} // TableRow_HoverOut


function UpdateLabelSuccess(sPrmResponse, oEventArgs) 
{
	//alert("response=" + sPrmResponse);
	//giLoading_ShowHide(false);
	if (sPrmResponse.trim().toLowerCase() != "true")
	{
		alert("Error saving changes (" + sPrmResponse + ")!");
		imgLoading_ShowHide(false, oEventArgs.ID, oEventArgs.modifier); //hide loading
	}
	else
	{
		imgSuccess_ShowHide(true, oEventArgs.ID, oEventArgs.modifier); //show success
		setTimeout(function () { imgSuccess_ShowHide(false, oEventArgs.ID, oEventArgs.modifier); }, idbmsDelay); //delay hide success
	}
} // UpdateLabelSuccess


function UpdateLabel(iPrmGroupingInstanceId, sPrmLabel) 
{
	//giLoading_ShowHide(true);
	imgLoading_ShowHide(true, iPrmGroupingInstanceId);
	
	//create dummy object to pass to ajax runner
	var objDummy = {};
	objDummy.ID = iPrmGroupingInstanceId;

	var ar = new AjaxRunner();
	ar.Url = "/idbms/ui/ajax/vg_handler.aspx";
	// 11/06/2007 - JM - (see #1101) Added gfid so we only update the last updated date for the form we are on.
	ar.Querystring = GroupQueryString + "&giid=" + iPrmGroupingInstanceId + "&gfid=" + CONST_CURRENTGFID; // GroupQueryString is defined by vg2
	ar.AddFormValue("cmd", "updatelabel");
	ar.AddFormValue("label", sPrmLabel);
	ar.OnSuccess = UpdateLabelSuccess;
	ar.Execute(null, objDummy);
} // UpdateLabel


function UpdateDesc(iPrmGroupingConfigId, sPrmDescription) 
{
	//giLoading_ShowHide(true);
	imgLoading_ShowHide(true, iPrmGroupingConfigId, 'desc_');
	
	//create dummy object to pass to ajax runner
	var objDummy = {};
	objDummy.ID = iPrmGroupingConfigId;
	objDummy.modifier = 'desc_';

	var ar = new AjaxRunner();
	ar.Url = "/idbms/ui/ajax/vg_handler.aspx";
	ar.Querystring = GroupQueryString + "&gcid=" + iPrmGroupingConfigId; // GroupQueryString is defined by vg2
	ar.AddFormValue("cmd", "updatedesc");
	ar.AddFormValue("description", sPrmDescription);
	ar.OnSuccess = UpdateLabelSuccess;
	ar.Execute(null, objDummy);
} // UpdateDesc


/*
function giLoading_ShowHide(bShow)
{
	var load = document.getElementById('giLoading');
	if (bShow)
		load.style.display = '';
	else
		load.style.display = 'none';
} //giLoading_ShowHide
*/

function imgLoading_ShowHide(bShow, iPrmId, sPrmModifier)
{
	//if modifier is passed in as null, make it blank
	if (!sPrmModifier) { sPrmModifier = ''; }
	var imgLoading = document.getElementById('imgLoading_' + sPrmModifier + iPrmId);
	var imgSuccess = document.getElementById('imgSuccess_' + sPrmModifier + iPrmId);
	if (imgLoading && imgSuccess)
	{
		if (bShow) //always swap with success on show
		{
			imgLoading.style.display = '';
			imgSuccess.style.display = 'none';
		}
		else //always hide both on hide
		{
			imgLoading.style.display = 'none';
			imgSuccess.style.display = 'none';
		}
	} //null check
} //imgLoading_ShowHide

function imgSuccess_ShowHide(bShow, iPrmId, sPrmModifier)
{
	//if modifier is passed in as null, make it blank
	if (!sPrmModifier) { sPrmModifier = ''; }
	var imgLoading = document.getElementById('imgLoading_' + sPrmModifier + iPrmId);
	var imgSuccess = document.getElementById('imgSuccess_' + sPrmModifier + iPrmId);
	if (imgLoading && imgSuccess)
	{
		if (bShow) //always swap with loading on show
		{
			imgLoading.style.display = 'none';
			imgSuccess.style.display = '';
		}
		else //always hide both on hide
		{
			imgLoading.style.display = 'none';
			imgSuccess.style.display = 'none';
		}
	} //null check
} //imgSuccess_ShowHide

function btnDeleteInstance_Click(prmGroupingInstanceId, prmModuleId)
{
	if (confirm("Are you sure?"))
	{
		imgLoading_ShowHide(true, prmGroupingInstanceId); //show loading
		var ar = new AjaxRunner();
		ar.Url = "/idbms/ui/ajax/vg_handler.aspx";
		ar.Querystring = GroupQueryString + "&giid=" + prmGroupingInstanceId + "&miid=" + prmModuleId + "&gfid=" + CONST_CURRENTGFID; // GroupQueryString is defined in vg2
		//alert(ar.Querystring + " " + );
		ar.AddFormValue("cmd", "deletefield");
		ar.OnSuccess = DeleteInstanceSuccess;
		var oDummy = {};
		oDummy.ID = prmGroupingInstanceId;
		ar.Execute(null, oDummy);
	}
} //btnDeleteInstance_Click

function DeleteInstanceSuccess(response, oPrmEventArgs)
{
	var giid = oPrmEventArgs.ID;
	if (response == 'true')
	{
		//show success
		imgSuccess_ShowHide(true,giid);
		//reload ajax
		//setTimeout(function () { RadAjaxPanel_Reload(CONST_CURRENTGFID); }, idbmsDelay);
		setTimeout(function () { window.location = GetCurrentUrlWithoutGFID() + '&gfid=' + CONST_CURRENTGFID; }, idbmsDelay);
	}
	else
	{
		//hide loading
		imgLoading_ShowHide(false, giid);
		//error - todo no alert?
		alert(response);
	}
} //DeleteInstanceSuccess

function InstanceBeforeDock(prmDrag, prmDock, prmOver) {
	var giidover = -1;
	var gfid = prmDrag.GetAttribute('GFID');
	var giid = prmDrag.GetAttribute('GIID');

	if ((gfid > 0) && (giid > 0)) {
		//get over id
		if (prmOver != null) {
			giidover = prmOver.GetAttribute('GIID');
		} else {
			// in this case, we've dropped on a non-sortable field; trick into the "do nothing" scenario
			giidover = giid;
		}
		
		// don't sort if they are trying to put it in the same place
		//
		// also don't sort if they are dropping it on the item just underneath us, since the sort order puts
		// us back in the exact same place, and errors out on the server side
		if (giid != giidover && (prmOver == null || prmDrag.GetOrderId() + 1 != prmOver.GetOrderId())) {
			//show loading (this function is in view_grouping2.js)
			imgLoading_ShowHide(true, giid);

			//ajax
			var ar = new AjaxRunner();
			ar.Url = '/idbms/ui/ajax/vg_handler.aspx';
			ar.Querystring = GroupQueryString + '&gfid=' + gfid + '&cmd=sortfield&giid=' + giid + '&giidover=' + giidover;
			ar.OnSuccess = InstanceSortFinish;

			//create dummy object to pass to execute()
			var EventArgs = {"ID":giid}; 
			ar.Execute(null, EventArgs);
		} // sort is different
	} // valid gfid and giid
} //InstanceBeforeDock

function InstanceSortFinish(response, EventArgs)
{
	var giid = EventArgs.ID;
	if (response == 'true')
	{
		//hide loading, show success
		imgSuccess_ShowHide(true, giid);
		//delay hide success
		setTimeout(function () { imgSuccess_ShowHide(false, giid);  window.location = window.location; }, idbmsDelay);
	}
	else
	{
		alert(response); //todo?
	}
} //InstanceSortFinish


function AddField(gfid, tblId, oPanel)
{
	//check gfid first
	if (bAddFieldModeOn && gfid != iCurrentGFID && iCurrentGFID > 0)
	{
		//cancel add in progress
		if (confirm(confirmUnsaved))//'This will remove unsaved changes. Are you sure?'))
		{
			CancelAddFields(true, oPanel);
		}
		else { return; }
	}
	iCurrentGFID = gfid;
	var tbl = document.getElementById(tblId);
	if (tbl)
	{
		//alert("tblid=" + tblId + ", tbl=" + tbl + ", rows=" + tbl.rows.length);
		//insert row at the bottom
		var newRow = tbl.insertRow(tbl.rows.length);
		newRow.id = 'gr_' + gfid + '_' + iAddFieldUniqueIndex;
		var newCell0 = newRow.insertCell(0);
		newCell0.setAttribute('valign', 'bottom');
		//add cancel img
		var img = document.createElement('img');
		img.src = DeleteIconPath;//'/images/Icons/v2/delete.gif';
		img.style.cursor = 'pointer';
		img.onclick = CreateCancelAddFieldDelegate(gfid,tblId,iAddFieldUniqueIndex,oPanel);
		img.setAttribute('align', 'texttop');
		newCell0.appendChild(img);
		newCell0.appendChild(document.createTextNode("\u00a0")); //space
		//text box
		var newInput = document.createElement('input');
		newInput.id = 'gn_' + gfid + '_' + iAddFieldUniqueIndex;
		newInput.type = 'text';
		newInput.value = FieldNameText; //'Field Name';
		newInput.setAttribute('maxLength', 128); // 03/06/2007 - JM - set max length per ticket number #267
		//focus
		setTimeout(function () { newInput.select(); newInput.focus(); },10);
		newCell0.appendChild(newInput);
		//cell 2
		var newCell1 = newRow.insertCell(1);
		newCell1.setAttribute('nowrap', 'nowrap');
		newCell1.setAttribute('valign', 'bottom');
		//dropdown
		var dd = document.createElement('select');
		dd.id = 'gt_' + gfid + '_' + iAddFieldUniqueIndex;
		if (!oFieldTypes) { oFieldTypes = GetFieldTypes(); }
		var tehLoopIndex = 0;
		var tehIndexToSelect = 0;
		for (var i in oFieldTypes)
		{
			var op = new Option(oFieldTypes[i], i); //field_type_id is the key for the array
			if (i == 1) { op.selected = true; tehIndexToSelect = tehLoopIndex; } //auto-select textbox
			dd.options[tehLoopIndex++] = op;
		}
		//to appease IE6
		dd.selectedIndex = tehIndexToSelect;
		newCell1.appendChild(dd);
		newCell1.appendChild(document.createTextNode("\u00a0")); //space
		//required checkbox
		var cb = document.createElement('input');
		cb.style.margin = '0px';
		cb.id = 'cb_' + gfid + '_' + iAddFieldUniqueIndex;
		cb.type = 'checkbox';
		var label = document.createElement('label');
		label.setAttribute('for', cb.id);
		label.innerHTML = ' Required?';
		newCell1.appendChild(cb);
		newCell1.appendChild(label);
		//add field mode - todo - disable all other toolbars' add field buttons on the page
		if (!bAddFieldModeOn) { AddFieldModeOnOff(true, gfid); }
		//add field to list
		AddFieldToList(iAddFieldUniqueIndex, gfid, tblId);
		
		
		//lastly, increment counts
		iAddFieldRowCount++;
		iAddFieldUniqueIndex++;
	} //null check
	//Hide ButtonSave and Next when adding fields
	if (imod$('divButtons') != null) imod$('divButtons').style.display = 'none';
} //AddField


function CreateCancelAddFieldDelegate(gfid, tblId, tblRowIndex, oPanel)
{
	return function () { CancelAddField(gfid,tblId,tblRowIndex, oPanel); }; 
} //CreateCancelAddFieldDelegate


function CancelAddField(gfid, tblId, tblRowIndex, oPanel)
{
	var maintbl = document.getElementById(tblId);
	if (maintbl)
	{
		//loop through rows to find the one with the right id
		var rowindex = -1;
		for (var i=0; i<maintbl.rows.length; i++)
		{
			if (maintbl.rows[i].id == 'gr_' + gfid + '_' + tblRowIndex)
			{
				rowindex = i;
			}
		}
		//delete
		if (rowindex > -1)
		{
			maintbl.deleteRow(rowindex);
			iAddFieldRowCount--;
			//remove from list
			RemoveFieldFromList(tblRowIndex);
		}
		//if no more, hide controls
		if (iAddFieldRowCount == 0)
		{
			AddFieldModeOnOff(false, gfid);
			ShowHideGroupingError(false, gfid, null, oPanel);
		}
	} //null check
	//Hide ButtonSave and Next when adding fields
	if (imod$('divButtons') != null) imod$('divButtons').style.display = '';
} //CancelAddField


function AddFieldModeOnOff(bOn, gfid)
{
	bAddFieldModeOn = bOn;
	//show save/cancel buttons
	ShowHideAddFieldModeControls(bOn, gfid);
} //AddFieldMode


function ShowHideAddFieldModeControls(bShow, gfid)
{
	var span = document.getElementById('spGroupingToolbarControls_' + gfid);
	if (span)
	{
		if (bShow) { span.style.display = ''; }
		else { span.style.display = 'none'; }
	}
} //ShowHideAddFieldModeControls


// JDB 6/12/2008 Single Table - adding control id to the url
function SaveAddFields(gfid, gid, oPanel, cid, prmModuleId) // quick add fields
{
	//hide error (if it's there)
	ShowHideGroupingError(false, gfid, null, oPanel);
	//validate
	var xml = '<root>\n';
	var arNewFieldNames = [];
	for (var id in arFieldList)
	{
		var obj = arFieldList[id];
		if (id && obj)
		{
			var txt = document.getElementById('gn_' + obj.gfid + '_' + obj.id);
			var dd = document.getElementById('gt_' + obj.gfid + '_' + obj.id);
			var cb = document.getElementById('cb_' + obj.gfid + '_' + obj.id);
			if (txt && dd && cb)
			{
				//if (console && console.log) console.log('txt: ' + txt.value + ', dd: ' + dd.value);
				if (txt.value.trim() == '' || dd.value.trim() == '')
				{
					//error, required
					ShowHideGroupingError(true, gfid, 'All fields are required.', oPanel);
					return;
				}
				if (arNewFieldNames[txt.value.trim().toLowerCase()] == true)
				{
					//error, unique
					ShowHideGroupingError(true, gfid, 'All field names must be unique.', oPanel);
					return;
				}
				else
				{
					//add to array
					arNewFieldNames[txt.value.trim().toLowerCase()] = true;
					//add to xml
					xml += '<newfield>\n<name><![CDATA[' + txt.value.trim() + ']]></name>\n';
					xml += '<type>' + dd.value + '</type>\n';
					xml += '<required>' + cb.checked + '</required>\n</newfield>\n';
				}
			} //null check
		} //null check
	} //field list loop
	//close xml
	xml += '</root>';
	//null object
	arNewFieldNames = null;
	//if (console && console.log)
	//{
		//console.log('xml: ' + xml);
	//}
	//hide buttons, show loading
	AddFieldModeOnOff(false, gfid);
	ShowHideToolbarLoading(true, gfid, true);
	//ajax
	var ar = new AjaxRunner();
	ar.Url = '/idbms/ui/ajax/vg_handler.aspx';
	// 10/11/2007 - JM - (see #2671, #2673) Added gfid so it can be used to look stuff up in vg_handler
	// JDB 6/12/2008 Single Table - adding control id to the url
	ar.Querystring = GroupQueryString + '&cid=' + cid + '&cmd=addfields&grpid=' + gid + "&miid=" + prmModuleId + "&gfid=" + gfid; //pass grouping id
	ar.AddFormValue("newfieldsxml", xml);
	ar.OnSuccess = SaveAddFieldsFinished;
	//create dummy object to pass to execute()
	var oDummy = {};
	oDummy.ID = gfid;
	oDummy.oPanel = oPanel;
	ar.Execute(null, oDummy);
	
} //SaveAddFields


function SaveAddFieldsFinished(response, oArgs)
{
	var gfid = oArgs.ID;
	var oPanel = oArgs.oPanel;
	if (response == 'true')
	{
		if (imod$('divButtons') != null) imod$('divButtons').style.display = '';
		//show success
		ShowHideToolbarLoading(true, gfid, false);
		//delay reload ajax panel
		//setTimeout(function () { RadAjaxPanel_Reload(CONST_CURRENTGFID); }, idbmsDelay);
		setTimeout(function () { window.location = GetCurrentUrlWithoutGFID() + '&gfid=' + CONST_CURRENTGFID; }, idbmsDelay);
	}
	else
	{
		//hide loading
		ShowHideToolbarLoading(false, gfid);
		//show errors passed back in response
		ShowHideGroupingError(true, gfid, response, oPanel);
		//turn on add field mode again
		AddFieldModeOnOff(true, gfid);
	}
} //SaveAddFieldsFinished


function CancelAddFields(bNoConfirm, oPanel)
{
	if (!bNoConfirm)
	{
		if (!confirm(confirmText)){ return; } //'Are you sure?')) 
	}
	//build a list of tbl row indexes
	var indexes = [];
	var maintbl;
	var gfid;
	//get the row index for every field in the array
	//if (console && console.log) console.log('field list count: ' + arFieldList.length);
	for (var id in arFieldList)
	{
		var obj = arFieldList[id];
		if (id && obj)
		{
			if (!maintbl) { maintbl = document.getElementById(obj.tblId); }
			if (!gfid) { gfid = obj.gfid; }
			//if (console && console.log) console.log('maintbl.rows.length: ' + maintbl.rows.length);
			for (var i=0; i<maintbl.rows.length; i++)
			{
				//if (console && console.log) console.log('maintbl.rows[i].id: ' + maintbl.rows[i].id);
				if (maintbl.rows[i].id == 'gr_' + gfid + '_' + obj.id)
				{
					indexes[indexes.length] = i; //add it to the end
					//if (console && console.log) console.log('breaking...');
					break; //we've found this field, exit this 2nd loop
				}
			}
		} //null id and obj
		//else { alert('null id or obj!'); }
	} //loop every field
	if (maintbl && gfid)
	{
		//if (console && console.log) console.log('indexes count: ' + indexes.length);
		//need to loop backwards so it removes the rows correctly (cause they are at the bottom of the table)
		for (var i=indexes.length-1; i>=0; i--)
		{
			//if (console && console.log) console.log('index: ' + indexes[i]);
			maintbl.deleteRow(indexes[i]);
		}
		iAddFieldRowCount = 0;
		AddFieldModeOnOff(false, gfid);
		arFieldList = [];
		//hide drop panel if it's showing
		ShowHideGroupingError(false, gfid, null, oPanel);
	
	} //tbl null check

	if (imod$('divButtons') != null) imod$('divButtons').style.display = '';
} //CancelAddFields


function SetupGroupingToolbar()
{
	//setup array
	arFieldList = [];
} //SetupGroupingToolbar


function AddFieldToList(id, gfid, tblId)
{
	//if (console && console.log) console.log('adding field to list! -- ' + id);
	//id is the unique index
	var obj = {};
	obj.id = id;
	obj.gfid = gfid;
	obj.tblId = tblId;
	arFieldList[id] = obj;
} //AddFieldToList


function RemoveFieldFromList(id)
{
	arFieldList[id] = null;
} //RemoveFieldFromList

function PrecisionTooFine(input)
{
	/*
	PrecisionTooFine(111) false
	PrecisionTooFine(111.) false
	PrecisionTooFine(111.1) false
	PrecisionTooFine(111.11) false
	PrecisionTooFine(111.111) true
	PrecisionTooFine(11.11) false
	PrecisionTooFine(1.11) false
	PrecisionTooFine(.11) false
	PrecisionTooFine(.1) false
	PrecisionTooFine(.) false
	PrecisionTooFine(.111) true
	*/
	if (input.trim() == '.') return false;
	var charIndex = String(input).indexOf(".");
	if (charIndex < 0) return false;
	return (charIndex < String(input).length - 3);
}

// There is a massive amount of javascript madness surrounding key events ( http://unixpapa.com/js/key.html )
// evt.which and evt.keyCode are handled differently by different browsers
// and even in the same browser, keyCode can have a different value on keyup than on keypress.
// We're bypassing all of that and simply use keyup as a trigger, then we pass tb.val() through a regex to strip out the invalid chars
// NOTE: currently precision ONLY accepts 0 and 2
function DonationDriverAmountKeyUp(target, event, precision, src)
{
	// if oninput is supported, then only fire this for the oninput event;
	// if oninput is not supported, only fire this for the onkeyup event.
	if ((src == "oninput") == onInputIsSupported)
	{
		var currentvalue = jQuery(target).val();
		var oldvalue = currentvalue;
		if (precision == 0)
		{
			currentvalue = currentvalue.replace(/[^0-9]+/g, ''); // just 0-9
		}
		else // (precision == 2)
		{
			currentvalue = currentvalue.replace(/[^0-9\.]+/g, ''); // 0-9 plus .
			// discard extraneous digits
			if (PrecisionTooFine(currentvalue)) currentvalue = parseFloat(Math.floor(parseFloat(currentvalue) * 100) / 100);
		}
		if (oldvalue != currentvalue)
		{
			// ctrl-a, ctrl-c, ctrl-v, home + shift-end, end + shift-home, shift-left, shift-right were all being bypassed because we would *always* reset the value on keyup,
			// causing val() to be reset, which caused the selection to be lost.
			// By setting this only on detected changes, that ability should come back.
			jQuery(target).val(currentvalue);
		}
	}
} // DonationDriverAmountKeyUp

function SetDonationDriverAmount(prmAmount)
{
	donationDriverAmount = prmAmount;
	// If we have designations, then update that label as well.
	if (hasDesignations) 
	{
		DesignationsSum();
	}

	// FieldControl 43 Scheduled Payments
	if (typeof CalculateScheduledPayments == 'function')
	{
		CalculateScheduledPayments();
	}
	// FieldControl 49 Perpetual Gift
	if (typeof CalculatePerpetualGift == 'function')
	{
		CalculatePerpetualGift();
	}
	// FieldControl 47 Designations
	if (typeof DonationDriverAmountChanged == 'function')
	{
		DonationDriverAmountChanged();
    }

    //for stripe as secondary payment gateway 
    if (typeof UpdatePaymentRequestButton == 'function')
    {
        UpdatePaymentRequestButton();
    }

} // SetDonationDriverAmount


function SetFixedFirstPaymentAmount(prmAmount) {
	fixedFirstPaymentAmount = prmAmount;
} // SetFixedFirstPaymentAmount

function DesignationsSum()
{
	var vSum = 0;
	jQuery("table.idbmsCampaignDesignations input[type='text']").each(function(k, v) {
		vSum += Number(v.value);
	});

	if (vSum > 0) 
	{
		hasDesignations = true;
		vSum = (donationDriverAmount - vSum).toFixed(2);
		jQuery('span.idbmsCampaignDesignationsMessage').html(DesignationsSumVerbiageItem.replace("##value##", vSum.toString()));

		if (vSum == 0) {
			btnNextDesignations = true;
		} else {
			btnNextDesignations = false;
		}

	} else {
		hasDesignations = false;
		jQuery('span.idbmsCampaignDesignationsMessage').html("");
		btnNextDesignations = true;
	}

	EnableNextButton();
}

// PaulS - Sprint 2009.12.03 - Light Authentication
// We now have multiple different pieces of functionality looking to enable / disable the next button.
// This will ensure that all items are met before enabling the button.
var btnNextDesignations = true;
var btnNextEventUniqEmail = true;
function EnableNextButton() {
	if (btnNextDesignations && btnNextEventUniqEmail) {
		jQuery('input#' + btnNext_ClientID).prop("disabled", !dataEntryMode);
	}
	else
	{
		jQuery('input#' + btnNext_ClientID).prop("disabled", true);
	}
}

var lightAuthAttempts = 0; 						// Number of lightauth attempts made.
var lightAuthQs = "";
var lightAuthTriggeringControlId = null;
function IcpOnClientClick(triggeringControlId)
{
	if (lightAuthAttempts >= lightAuthMaxAttempts) { return true; }

	if (VerifyIcpFields())
    {
        lightAuthTriggeringControlId = triggeringControlId;
		CallLightAuthAjax();
		return false;		// Return false to prevent the form being submitted.
	}
	return true;		// Return true since all the fields were not filled out so the validators fire and let the user know.
}

function VerifyIcpFields() 
{
	var prePopulated = 0;
	lightAuthQs = "";
	for (var x = 0; x < icpFields.length; x++)
	{
		var obj = jQuery(icpFields[x]).eq(0);
		var value = obj.attr("value");

		// This will be nothing if it is not a dropdown.
		var option0 = jQuery(icpFields[x] + " option").eq(0).text();
		
		// charAt(0) == '_' means it is a select box that has the 'Please Choose' selected (or no value).
		// If it had a value it would have that before the '_'.
		if (option0.length > 0 && value.charAt(0) == '_')
		{
			value = "";
		} else if (option0.length > 0)
		{
			value = jQuery(icpFields[x] + " option:selected").val().split("_")[0];
		}

		if (value != "")
		{
			prePopulated++;
			lightAuthQs += "&" + icpMemberFields[x] + "=" + encodeURIComponent(value);
		}
	}

	var emailQsValue = "";
	for (var x = 0; x < icpEmailFields.length; x++)
	{
		var obj = jQuery(icpEmailFields[x]).eq(0);
		var value = obj.attr("value");

		if (value != "")
		{
			if (emailQsValue.length > 0) { emailQsValue += ","; }
			emailQsValue += value;
		}
	}

	if (emailQsValue.length > 0)
	{
		lightAuthQs += "&emails=" + encodeURIComponent(emailQsValue);
	}

	return (prePopulated == icpFields.length) && (emailQsValue.length > 0);
}

var focusedElementBeforeIcpModal;

// Open the ICP ajax window.
function CallLightAuthAjax()
{
	// Prevent us from making the call if we are over our max attempts.
	if (lightAuthAttempts >= lightAuthMaxAttempts)
	{
		return;
	}

	var url = "/controls/LightAuthenticationUI/LightAuth_handler.aspx?" + GroupQueryString + "&cid=" + FormId + lightAuthQs;


	focusedElementBeforeIcpModal = jQuery(':focus');
	icpModal.Open(url);
	//radopen(url, "RadICPWindow"); //use this if you need the old UI
}

function IcpWindowLoaded(oWnd, args)
{
	if (oWnd) oWnd.get_contentFrame().contentWindow.SetIsReady();
	if (window.icpModal) 
	{
		for (var i = 0; i < window.frames.length; i++) 
		{
			try {
				if (window.frames[i].name && window.frames[i].name.indexOf("fancybox-frame") == 0) {
					window.frames[i].SetIsReady();
				}
			} catch(e) {
				// Looping through the frames like this we sometimes get an error of trying to access cross domain to facebook
				// if our social buttons are on the page.
			}
		}
	}
}
// ICP WindowClosed event handler.
function SubmitICPResponse(mapType, selectedId)
{
	if (selectedId > 0)
	{
		FinishIcp();
		AddMemberid(mapType, selectedId);
	}
	else if (selectedId == -1)
	{
		//do nothing
        return;
	}
	else
	{
		FinishIcp();
    }

    if (lightAuthTriggeringControlId && jQuery("#" + lightAuthTriggeringControlId).length)
    {
        jQuery("#" + lightAuthTriggeringControlId).click();
    }
    else if (jQuery('input#' + btnNext_ClientID).length)
    {
        jQuery('input#' + btnNext_ClientID).click();
    }
    else
    {
        jQuery('input#rg_gfid_' + CONST_CURRENTGFID + '_btnNext').click();
    }
}

function IcpWindowClosed(oWnd, args)
{
	if (args)
	{
		SubmitICPResponse(args.mapType, args.selectdId);
	}
}

// PaulS - Sprint 2009.12.03 - Light Authentication
// This will allow the user to skip by the light auth fucntionality.
function FinishIcp()
{
	// Doing this will disable any future calls.
	lightAuthAttempts = lightAuthMaxAttempts;
}

// PaulS - Sprint 2009.12.03 - Light Authentication - Since we could have members sharing an e-mail address,
// make sure we put the member_id in the form so that we can pick up the correct one in Vg2.
function AddMemberid(prmMaptype, prmMember)
{
	var obj = jQuery(icpEmailFields[0]).eq(0);
	jQuery(obj).parent().append("<input type=\"hidden\" name=\"_IC_MAPTYPE_\" value=\"" + prmMaptype + "\" />");
	jQuery(obj).parent().append("<input type=\"hidden\" name=\"_IC_MEMBERID_\" value=\"" + prmMember + "\" />");
}

function ToggleDiv(prmTargetId, sender)
{
	if (imod$(prmTargetId).style.display == "none")
	{
		jQuery("#" + prmTargetId).slideDown('fast');
		if (sender)
		{
			jQuery(sender).removeClass("div-toggle-closed");
			jQuery(sender).addClass("div-toggle-opened");
		}
	}
	else
	{
		jQuery("#" + prmTargetId).slideUp('fast');
		if (sender)
		{
			jQuery(sender).removeClass("div-toggle-opened");
			jQuery(sender).addClass("div-toggle-closed");
		}

	}
}

function SetupTextBoxOnInputSupport()
{
	// Ref1: http://blog.danielfriesen.name/2010/02/16/html5-browser-maze-oninput-support/
	// Ref2: http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
	var input = document.createElement("input");
	onInputIsSupported = ("oninput" in input);
	if (!onInputIsSupported)
	{
		input.setAttribute("oninput", "return;");
		onInputIsSupported = (typeof input.oninput == "function");
	}
	if (!onInputIsSupported)
	{
		try
		{
			var e = document.createEvent("KeyboardEvent");
			e.initKeyEvent("keypress", true, true, window, false, false, false, false, 0, "e".charCodeAt(0));
			document.body.appendChild(input);
			input.addEventListener("input", function (e) { onInputIsSupported = true; e.preventDefault(); e.stopPropagation(); }, false);
			input.focus();
			input.dispatchEvent(e);
			document.body.removeChild(input);
		} catch (e) { }
	}
} // SetupTextBoxOnInputSupport

var ImodUniqueEventEmail = (function () {
	
	var confirmUrl = null;
	var emailBoxes = null;
	var isAdmin = false;
	var redirectUrl = null;
	var emailMid = 0;
	var confirmedEmailAddress = null;
	var currentMid = 0;
	var newRegistrationModel = false;

	var public = {};

	public.Init = function (url, id, admin, redirect, mid, newSub) {
		confirmUrl = url;
		emailBoxes = id;
		isAdmin = admin;
		redirectUrl = redirect;
		currentMid = mid;
		newRegistrationModel = newSub;

		EnableNextButton();
	};

	public.CloseWindowAndBlankEmail = function () {
		jQuery(":input[data-fieldcontrolid^=" + emailBoxes + "]").attr("value", "");
		jQuery(":input[data-fieldcontrolid^=" + emailBoxes + "_Confirm]").attr("value", "");
		jQuery.fancybox.close();
	};
    public.CloseWindowAndRedirectToEdit = function() {
		if (isAdmin) window.location.href = redirectUrl + "&mid=" + emailMid;
	};
    public.CloseWindowAndContinue = function() {
		confirmedEmailAddress = jQuery(":input[data-fieldcontrolid^=" + emailBoxes + "]").val();
		btnNextEventUniqEmail = true;
		EnableNextButton();
		jQuery.fancybox.close();
	};
    return public;
} ());

var ImodEventConfirmRegistration = (function () {
	
	var dialogUrl = null;
	var resetUrl = null;
	var newCookieVal = null;

	var public = {};

	public.Init = function (durl, rurl, ncv) {
		dialogUrl = durl;
		resetUrl = rurl;
		newCookieVal = ncv;

		rmEventConfirmEditRegistration.Open(dialogUrl);
	};

	public.Continue = function () {
		var sValue = imod_GetCookie("SuppressECR", "");
		if (sValue == null || sValue == '') sValue = '.';
		imod_SetCookie("SuppressECR", "", sValue + newCookieVal);
		jQuery.fancybox.close();
	};
    public.Reset = function () {
		var sValue = imod_GetCookie("SuppressECR", "");
		if (sValue == null || sValue == '') sValue = '.';
		imod_SetCookie("SuppressECR", "", sValue + newCookieVal);
		window.location.href = resetUrl;
	};
    return public;
} ());

function ToggleActivityValidationFieldControl(fc, guestId, enable) {
	if (typeof Page_Validators != 'undefined') {
        jQuery.each(Page_Validators, function (index, validator) {
            var validationFunctionExists = validator.clientvalidationfunction;
            var validationFunctionIncludesCVcheckbox = false;
            if (validationFunctionExists) {
                validationFunctionIncludesCVcheckbox = validator.clientvalidationfunction.includes("cvCheckBox");

            }
            if (document.getElementById(validator.controltovalidate) || validationFunctionIncludesCVcheckbox) {
                // match on this field control
                if (validator.id.indexOf('fc_' + fc + '_') > -1) {
                    if (
                        // if the primary registrant, ensure there is no _egi_ modifier in the validator
                        (guestId < 0 && validator.id.indexOf('_egi_') < 0)
                        ||
                        // if a guest, ensure a matching _egi_ modifier
                        (guestId >= 0 && validator.id.indexOf('_egi_' + guestId + '_') > -1)
                    ) {
                        //alert('setting ' + index + ':' + validator.id + ' to ' + enable);
                        ValidatorEnable(validator, enable);
                    }
                }
            }
		});
	}
}

imod = imod || {};
imod.CollapsablePanel = imod.CollapsablePanel || (function(jQuery) {
	function toggleAriaExpanded(contentId, spanId, categoryName) {
		var anchorId = contentId + '_ActionLink',
			anchor = jQuery('#' + anchorId),
			content = jQuery('#' + contentId),
			contentIsVisible = content.is(':visible');
		
		anchor.attr('aria-expanded', (contentIsVisible ? 'true' : 'false'));

		if (spanId && categoryName) {
			var span = jQuery('#' + spanId);
			if (contentIsVisible) {
				span.text(categoryName + ' is expanded');
			} else {
				span.text(categoryName + ' is collapsed');
			}
		}
	}
	function initializeAriaExpanded(clientId) {
		toggleAriaExpanded(clientId);
	}

	return {
		Toggle: toggleAriaExpanded,
		Initialize: initializeAriaExpanded
	};
})(jQuery);

if (window.IModController) IModController.scriptLoadedNotification("/iDBMS/ui/js/view_grouping2.js");