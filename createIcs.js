function createIcs(){
    var date = $("#txtDate").val();
    var detail = $("#description").val();

    var ics = "BEGIN:VCALENDAR\n"
    +"VERSION:1.0\n"
    +"BEGIN:VEVENT\n"
    +"CATEGORIES:MEETING\n"
    +"STATUS:TENTATIVE\n"
    +"DTSTART:"+ date + "T000000Z\n"
    +"SUMMARY:がんの検診日\n"
    +"DESCRIPTION:" + detail + "\n"
    +"CLASS:PRIVATE\n"
    +"END:VEVENT\n"
    +"END:VCALENDAR\n"

    console.log(ics);
}