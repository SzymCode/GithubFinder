$(document).ready(function () {
    function loadTemplates(templateNames) {
        // Recursive function to load templates one by one
        function loadTemplate(index) {
            if (index < templateNames.length) {
                const templateName = templateNames[index];
                $.ajax({
                    url: `${templateName}.html`,
                    method: 'GET',
                    success: function (data) {
                        $('#app').append(data);
                        console.log(`${index + 1}. Template: ${templateName}.html has been loaded successfully!`);
                        loadTemplate(index + 1); // Load next template recursively
                    },
                    error: function () {
                        $('#app').append('<p>Error loading template.</p>');
                        console.log('Error loading template.');
                    }
                });
            }
        }

        // Start loading templates
        loadTemplate(0);
    }

    loadTemplates([
        'navbar',
        'search'
    ]);
});
