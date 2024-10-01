function executeScript() {
    console.log("Script Startup!!!");
    if(document.querySelectorAll('span.el-link--inner')){
        var nextSection = document.querySelectorAll('span.el-link--inner')[2];
    }
    if (document.querySelector('.el-button.el-button--default.el-button--small.el-button--primary ')){
        document.querySelector('.el-button.el-button--default.el-button--small.el-button--primary ').click();
    }
    if (document.querySelector('video')) {
        var video = document.querySelector('video');
        if (video.paused) {
            console.log("Video is paused, playing");
            video.muted = true;
            if (document.querySelectorAll('.vjs-icon-placeholder')[0]){
                document.querySelectorAll('.vjs-icon-placeholder')[0].click();
            }else{video.play();}
            console.log("Playback speed is enabled");
            video.playbackRate = 4;
            video.addEventListener('ended', function() {
                setTimeout(() => {
                    nextSection.click();
                }, 2000);
                setTimeout(executeScript, 3000);
            });
        }
    } else if (document.querySelector('.el-image__inner.el-image__preview')) {
        var pageNext = document.querySelectorAll('.next')[0];
        var pageInfo = document.querySelector('.page');
        var totalPageNumber = pageInfo.textContent.match(/\d+/g)[1];
        var currentPageNumber = pageInfo.textContent.match(/\d+/g)[0];

        for (var i = 1; i < totalPageNumber; i++) {
            if (currentPageNumber < totalPageNumber){
                console.log('Page turning');
                pageNext.click();
            }
        }
        setTimeout(() => {
            nextSection.click();
            }, 2000);
        setTimeout(executeScript, 3000);
    } else {
        nextSection.click();
        setTimeout(executeScript, 3000);
    }
}

setTimeout(executeScript, 3000);