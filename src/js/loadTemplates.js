$(document).ready(function () {
    function loadTemplate(templateName) {

        $.ajax({
            url: `${templateName}.html`,
            method: 'GET',
            success: function (data) {
                $('#app').html(data);
                console.log(`Template: ${templateName} has been loaded successfully!`)
            },
            error: function () {
                $('#app').html('<p>Error loading template.</p>');
                console.log('Error loading template.')
            }
        });
    }

    loadTemplate('search');
});
