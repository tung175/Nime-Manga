jQuery(document).ready(function () {
    jQuery('#form-filter').submit(function () {
        try {
            var sort = jQuery('#filter-sort').val(); var eptype = jQuery('#filter-eptype').val(); var category = jQuery('#filter-category').val(); var country = jQuery('#filter-country').val(); var season = jQuery('#filter-season').val(); var year = jQuery('#filter-year').val(); var submitPath = ''; if (eptype != '') {
                switch (eptype) { case 'anime-moi': submitPath += 'anime-moi/'; break; case 'anime-le': submitPath += 'anime-le/'; break; case 'anime-bo': submitPath += 'anime-bo/'; break; }
            }
            if (category != '') {
                if (submitPath == '') { submitPath = 'the-loai/' + category + '/'; }
                else { submitPath += category + '/'; }
            }
            if (country != '') {
                if (submitPath == '') { submitPath = 'quoc-gia/' + country + '/'; }
                else { submitPath += country + '/'; }
            }
            if (season != '') {
                if (submitPath == '') { submitPath = 'season/' + season + '/'; }
                else { submitPath += season + '/'; }
            }
            if (year != '' && year.length == 4) {
                if (submitPath == '')
                    submitPath += 'phim-' + year + '/'; else
                    submitPath += year + '/';
            }
            if (sort != '' && sort != 'updatetime') { submitPath += (submitPath.indexOf('?') == -1) ? '?' : '&'; submitPath += 'rel=' + sort; }
            window.location.replace(MAIN_URL + '/' + submitPath); return false;
        }
        catch (err) { alert(err.description); return true; }
    });
});