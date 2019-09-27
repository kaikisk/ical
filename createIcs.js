var ics = '';
var i = 0;

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

    var file = new Blob([ics], {type: ics});
    var url = window.URL.createObjectURL(file);
    $("#downloadIcs").attr("href", url);
    
    console.log("success");
}

var db;
var indexedDB = window.indexedDB || window.mozIndexedDB || window.msIndexedDB;

    if (indexedDB) {
        // データベースを削除したい場合はコメントを外します。
        //indexedDB.deleteDatabase("mydb");
        var openRequest = indexedDB.open("test");
            
        openRequest.onupgradeneeded = function(event) {
            // データベースのバージョンに変更があった場合(初めての場合もここを通ります。)
            db = event.target.result;
            var store = db.createObjectStore("store1", { keyPath: "mykey"});
            store.createIndex("myvalueIndex", "myvalue");
        }
            
        openRequest.onsuccess = function(event) {
            db = event.target.result;
        }
    } else {
        window.alert("このブラウザではIndexed DataBase API は使えません。");     
    }

    function save() {
        //localStorage.setItem(x, $('#'+x).val());
    
        var db;
        var request = indexedDB.open('test');
        request.onsuccess = function (event){
            db = event.target.result;
            var ts = db.transaction(["store1"], "readwrite");
            var store = ts.objectStore("store1");
            var request = store.put({mykey: i, myvalue: ics});
            request.onsuccess = function(event){
                console.log("成功しました");
            }
            request.onerror = function(event){
                console.log("エラーが発生しました。");
            }
        }
    }