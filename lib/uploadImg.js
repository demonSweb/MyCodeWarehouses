var imgSrc = []; //鍥剧墖璺緞
var imgFile = []; //鏂囦欢娴�
var imgName = []; //鍥剧墖鍚嶅瓧
//閫夋嫨鍥剧墖
function imgUpload(obj) {
    var oInput = '#' + obj.inputId;
    var imgBox = '#' + obj.imgBox;
    var btn = '#' + obj.buttonId;
    $(oInput).on("change", function() {
        var fileImg = $(oInput)[0];
        var fileList = fileImg.files;
        for(var i = 0; i < fileList.length; i++) {
            var imgSrcI = getObjectURL(fileList[i]);
            imgName.push(fileList[i].name);
            imgSrc.push(imgSrcI);
            imgFile.push(fileList[i]);
        }
        addNewContent(imgBox);
    })
    $(btn).on('click', function() {
        var data = new Object;
        data[obj.data] = imgFile;
        submitPicture(obj.upUrl, data);
    })
}
//鍥剧墖灞曠ず
function addNewContent(obj) {
    $(imgBox).html("");
    for(var a = 0; a < imgSrc.length; a++) {
        var oldBox = $(obj).html();
        $(obj).html(oldBox + '<div class="imgContainer"><img title=' + imgName[a] + ' alt=' + imgName[a] + ' src=' + imgSrc[a] + ' onclick="imgDisplay(this)"><p onclick="removeImg(this,' + a + ')" class="imgDelete">鍒犻櫎</p></div>');
    }
}
//鍒犻櫎
function removeImg(obj, index) {
    imgSrc.splice(index, 1);
    imgFile.splice(index, 1);
    imgName.splice(index, 1);
    var boxId = "#" + $(obj).parent('.imgContainer').parent().attr("id");
    addNewContent(boxId);
}
//涓婁紶(灏嗘枃浠舵祦鏁扮粍浼犲埌鍚庡彴)
function submitPicture(url,data) {
    console.log(data);
    alert('璇锋墦寮€鎺у埗鍙版煡鐪嬩紶閫掑弬鏁帮紒');
    if(url&&data){
        $.ajax({
            type: "post",
            url: url,
            async: true,
            data: data,
            traditional: true,
            success: function(dat) {
                //			console.log(dat);
            }
        });
    }
}
//鍥剧墖鐏
function imgDisplay(obj) {
    var src = $(obj).attr("src");
    var imgHtml = '<div style="width: 100%;height: 100vh;overflow: auto;background: rgba(0,0,0,0.5);text-align: center;position: fixed;top: 0;left: 0;z-index: 1000;"><img src=' + src + ' style="margin-top: 100px;width: 70%;margin-bottom: 100px;"/><p style="font-size: 50px;position: fixed;top: 30px;right: 30px;color: white;cursor: pointer;" onclick="closePicture(this)">脳</p></div>'
    $('body').append(imgHtml);
}
//鍏抽棴
function closePicture(obj) {
    $(obj).parent("div").remove();
}

//鍥剧墖棰勮璺緞
function getObjectURL(file) {
    var url = null;
    if(window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if(window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if(window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}