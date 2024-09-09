$(function() {
    // チェックボックスの状態が変わったときの処理
    $('#menu-toggle').on('change', function() {
        if ($(this).is(':checked')) {
            // チェックが入れられたとき
            $('#header-menu').stop().slideDown(); // メニューを表示
        } else {
            // チェックが外されたとき
            $('#header-menu').stop().slideUp(); // メニューを非表示
        }
    });

    // 画面幅が変更されたときの処理
    $(window).on('resize', function() {
        var windowWidth = $(window).width();

        if (windowWidth > 768) {
            $('#header-menu').stop(true, true).show(); // 幅が768pxを超えるとメニューを表示（高さをリセット）
        } else {
            if (!$('#menu-toggle').is(':checked')) {
                $('#header-menu').stop(true, true).slideUp(); // 幅が768px以下でメニューが開いていなければ非表示
            }
        }
        
    });

    // ページが読み込まれたときの処理
    $(window).trigger('resize'); // 最初に画面幅に応じてメニューの表示状態を設定
});