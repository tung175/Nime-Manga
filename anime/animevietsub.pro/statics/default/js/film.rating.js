jQuery(document).ready(function (t) {
    var score_current = jQuery("#score_current").val(); var hint_current = jQuery("#hint_current").val(); jQuery("#hint").html(hint_current); jQuery("#score").html(score_current + " ĐIỂM"); function scorehint(score) {
        var text = ""; if (score == "1") { text = "Dở tệ" }
        if (score == "2") { text = "Dở" }
        if (score == "3") { text = "Không hay" }
        if (score == "4") { text = "Ko hay lắm" }
        if (score == "5") { text = "Bình thường" }
        if (score == "6") { text = "Xem được" }
        if (score == "7") { text = "Có vẻ hay" }
        if (score == "8") { text = "Hay" }
        if (score == "9") { text = "Rất hay" }
        if (score == "10") { text = "Hay tuyệt" }
        return text;
    }
    jQuery('#star').raty({
        half: false, score: function () { return jQuery(this).attr('data-score'); }, mouseover: function (score, evt) { jQuery("#score").html(score + " ĐIỂM"); jQuery("#hint").html(scorehint(score)); }, mouseout: function (score, evt) { var score_current = jQuery("#score_current").val(); var hint_current = jQuery("#hint_current").val(); jQuery("#hint").html(hint_current); jQuery("#score").html(score_current + " ĐIỂM"); }, click: function (score, evt) {
            jQuery.ajax({ 'url': "/ajax/rate", 'type': 'GET', 'dataType': 'JSON', 'data': { '_fxAjax': 1, '_fxResponseType': 'json', 'score': score, 'film': filmInfo.filmID } }).done(function (data) {
                if (data._fxStatus && data._fxStatus == 1) {
                    if (typeof data._fxMessage == 'string')
                        fx.alertMessage("Chúc mừng", data._fxMessage, "success"); if (typeof data.rateCount != 'undefined') { jQuery('.post-ratings .num-rating').text(data.rateCount); }
                    if (typeof data.ratePoint != 'undefined') { jQuery('.post-ratings #score_current').val(data.ratePoint); jQuery('.post-ratings #average_score').html(data.ratePoint); jQuery('#TPVotes').attr("data-percent", data.ratePoint * 10); }
                } else if (data._fxStatus && data._fxStatus == 2) { fx.alertMessage("Xin chào", data._fxMessage, "info"); } else { fx.alertMessage("Có lỗi", data._fxMessage, "error"); }
            });
        }
    }); jQuery('#star').css('width', '170px'); jQuery('.post-ratings #hint').css('font-size', '12px');
});