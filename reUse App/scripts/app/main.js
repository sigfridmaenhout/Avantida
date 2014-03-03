//Init kendo ui mobile application
    
    var app = new kendo.mobile.Application(document.body, 
    {
        transition:'slide',
        useNativeScrolling: false
        
    });
//Open popup login screen
        function openModal() {
   			$("#login-modal").data("kendoMobileModalView").open();
			}
//close popup login screen
    function closeModal() {
   				$("#login-modal").data("kendoMobileModalView").close();
			}
//
function mobileListViewPullToRefresh(e) {
        var dataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "http://demos.telerik.com/kendo-ui/service/Products/Read",
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
//Bind data to listview
  function mobileListViewDataBindInitGrouped() {
        $("#grouped-listview").kendoMobileListView({
            template: "<span>Status: #: status # </span><span style='float:right;'>Created on: #: createdon #</span><br><span>User: #: user # </span><span style='float:right;'>Container no: #: containernumber #</span><br><span>Booking ref: #: bookingref # </span><span style='float:right;'>Export ref: #: exportref #</span><br><span>Reuse date: #: reusedate # </span><span style='float:right;'>Import Del Date: #: importdeldate #</span><br><span>Invoice Price: #: invoiceprice #</span>",
            headerTemplate: "<h2>Reference No: ${value} </h2>",
            dataSource: kendo.data.DataSource.create({data: groupedData, group: "referencenumber"}),
            
            //template: "<p> ${status} ${createdon}<br> ${user} ${containernumber}<br> ${bookingref} ${exportref}<br> ${reusedate} ${importdeldate} <br>${invoiceprice}",
            fixedHeaders: false
        });
    } 

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
   

       
	