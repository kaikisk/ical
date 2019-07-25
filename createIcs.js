var ics = '';

function createIcs(){
    var date = $("#txtDate").val();
    var detail = $("#description").val();

    var date1 = date.replace(/-/g, '');

    ics = "BEGIN:VCALENDAR\n"
    +"VERSION:1.0\n"
    +"BEGIN:VEVENT\n"
    +"CATEGORIES:MEETING\n"
    +"STATUS:TENTATIVE\n"
    +"DTSTART:"+ date1 + "T000000Z\n"
    +"SUMMARY:がんの検診日\n"
    +"DESCRIPTION:" + detail + "\n"
    +"CLASS:PRIVATE\n"
    +"END:VEVENT\n"
    +"END:VCALENDAR\n"

    console.log(ics);
}

function download(){
    var file = new Blob([ics], {type: ics});
    var url = window.URL.createObjectURL(file);
    $("#downloadIcs").attr("href", url);
    $("#downloadIcs").attr("download", "calendar.ics");
    
    console.log("success");
}