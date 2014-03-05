//Init kendo ui mobile application
    
    var app = new kendo.mobile.Application(document.body, 
    {
        transition:'slide',
        useNativeScrolling: false
        
    });

//init 
$(document).ready(function(e){
     $('#grouped-listview').hide();
     $('#credit-listview').hide();
     $('#reuse-listview').hide();
     $('#request-button').hide();
   
});

//standard init kendo form mobile
function initForm() {
        var body = $(".km-pane");

        if (kendo.ui.DropDownList) {
            $("#dropdown1").kendoDropDownList({
                // The options are needed only for the desktop demo, remove them for mobile.
                popup: { appendTo: body },
                animation: { open: { effects: body.hasClass("km-android") ? "fadeIn" : body.hasClass("km-ios") || body.hasClass("km-wp") ? "slideIn:up" : "slideIn:down" } }
            });
            $("#dropdown2").kendoDropDownList({
                // The options are needed only for the desktop demo, remove them for mobile.
                popup: { appendTo: body },
                animation: { open: { effects: body.hasClass("km-android") ? "fadeIn" : body.hasClass("km-ios") || body.hasClass("km-wp") ? "slideIn:up" : "slideIn:down" } }
            });
        }
    }
//show listview 
function onClick(e) {
    //binding data webservice
		function mobileListViewPullToRefresh(e) {
        	var dataSource = new kendo.data.DataSource({
            	type:"odata",
            	transport: {
                	read: {
                    	url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                    	dataType: "jsonp"
                	}
            	},
            	schema: {
                    total: function () { return 77; }
            	},   
            	group:"UnitPrice",
            	serverPaging: true,
            	pageSize: 40
        	});

        	$("#grouped-listview").kendoMobileListView({
           	 	dataSource: dataSource,
            	pullToRefresh: true,            
            	template: "<span>#:ProductName#</span><p>#:kendo.toString(UnitPrice, 'c')#</p>",
            	headerTemplate: "<h2>Reference No: ${value} </h2>"
        	});
    	}
    
    	mobileListViewPullToRefresh();
    
       	$('#grouped-listview').show();
    	$('#credit-listview').show();
     	$('#reuse-listview').show();
    	$('#request-button').show();
    
        $('#login').hide();
    }
//Open popup login screen
        function openModal() {
   			$("#login-modal").data("kendoMobileModalView").open();
			}
//close popup login screen
    function closeModal() {
   				$("#login-modal").data("kendoMobileModalView").close();
			}

//Bind data to listview
/*  function mobileListViewDataBindInitGrouped() {
        $("#grouped-listview").kendoMobileListView({
            template: "<span>Status: #: status # </span><span style='float:right;'>Created on: #: createdon #</span><br><span>User: #: user # </span><span style='float:right;'>Container no: #: containernumber #</span><br><span>Booking ref: #: bookingref # </span><span style='float:right;'>Export ref: #: exportref #</span><br><span>Reuse date: #: reusedate # </span><span style='float:right;'>Import Del Date: #: importdeldate #</span><br><span>Invoice Price: #: invoiceprice #</span>",
            headerTemplate: "<h2>Reference No: ${value} </h2>",
            dataSource: kendo.data.DataSource.create({data: groupedData, group: "referencenumber"}),
            
            //template: "<p> ${status} ${createdon}<br> ${user} ${containernumber}<br> ${bookingref} ${exportref}<br> ${reusedate} ${importdeldate} <br>${invoiceprice}",
            fixedHeaders: false
        });
    } */

//test data
    var groupedData = [
   {
        referencenumber: "1402.HZPGQ.21", 
        status: "Pending",
        createdon: "05/12/2013",
        user: "Sigfrid Maenhout",
        containernumber: "zerzerez",
        bookingref: "zerzerez",
        exportref: "zerzerez",
        reusedate: "05/12/2013",
        importdeldate: "05/12/2013",
        invoiceprice: "€ 25, 00"
        
     },
     {
        referencenumber: "1402.HZPGQ.11", 
        status: "Pending",
        createdon: "05/12/2013",
        user: "Sigfrid Maenhout",
        containernumber: "zerzerez",
        bookingref: "zerzerez",
        exportref: "zerzerez",
        reusedate: "05/12/2013",
        importdeldate: "05/12/2013",
        invoiceprice: "€ 25, 00"
        
     },
     {
        referencenumber: "1402.HZPGQ.01", 
        status: "Declined",
        createdon: "05/12/2013",
        user: "Sigfrid Maenhout",
        containernumber: "zerzerez",
        bookingref: "zerzerez",
        exportref: "zerzerez",
        reusedate: "05/12/2013",
        importdeldate: "05/12/2013",
        invoiceprice: "€ 25, 00"
        
     },
     {
        referencenumber: "1402.HZPGQ.71", 
        status: "Declined",
        createdon: "05/12/2013",
        user: "Sigfrid Maenhout",
        containernumber: "zerzerez",
        bookingref: "zerzerez",
        exportref: "zerzerez",
        reusedate: "05/12/2013",
        importdeldate: "05/12/2013",
        invoiceprice: "€ 25, 00"
        
     },
     {
        referencenumber: "1402.HZPGQ.91", 
        status: "Declined",
        createdon: "05/12/2013",
        user: "Sigfrid Maenhout",
        containernumber: "zerzerez",
        bookingref: "zerzerez",
        exportref: "zerzerez",
        reusedate: "05/12/2013",
        importdeldate: "05/12/2013",
        invoiceprice: "€ 25, 00"
        
     },
     {
        referencenumber: "1402.HZPGQ.81", 
        status: "Declined",
        createdon: "05/12/2013",
        user: "Sigfrid Maenhout",
        containernumber: "zerzerez",
        bookingref: "zerzerez",
        exportref: "zerzerez",
        reusedate: "05/12/2013",
        importdeldate: "05/12/2013",
        invoiceprice: "€ 25, 00"
        
     },
     {
        referencenumber: "1402.HZPGQ.51", 
        status: "Declined",
        createdon: "05/12/2013",
        user: "Sigfrid Maenhout",
        containernumber: "zerzerez",
        bookingref: "zerzerez",
        exportref: "zerzerez",
        reusedate: "05/12/2013",
        importdeldate: "05/12/2013",
        invoiceprice: "€ 25, 00"
        
     },
     {
        referencenumber: "1402.HZPGQ.20", 
        status: "Declined",
        createdon: "05/12/2013",
        user: "Sigfrid Maenhout",
        containernumber: "zerzerez",
        bookingref: "zerzerez",
        exportref: "zerzerez",
        reusedate: "05/12/2013",
        importdeldate: "05/12/2013",
        invoiceprice: "€ 25, 00"
        
     }
        
];
   

       
	