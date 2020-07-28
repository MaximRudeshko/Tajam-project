$(document).ready(function () {
    $(function () {
        $('.popup-modal').magnificPopup();
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });
});