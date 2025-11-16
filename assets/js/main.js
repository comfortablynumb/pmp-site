$(document).ready(function() {
    // Configure marked options
    marked.setOptions({
        breaks: true,
        gfm: true
    });

    // Load hero content
    loadMarkdownContent('content/hero.md', '#hero-content');

    // Load overview content
    loadMarkdownContent('content/overview.md', '#overview-content');

    // Load getting started content
    loadMarkdownContent('content/getting-started.md', '#getting-started-content');

    // Load applications
    loadApplications();

    // Smooth scroll for navigation
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });
});

/**
 * Load markdown content from a file and render it to a target element
 */
function loadMarkdownContent(file, targetSelector) {
    $.ajax({
        url: file,
        dataType: 'text',
        success: function(data) {
            var html = marked.parse(data);
            $(targetSelector).html(html).addClass('loading');
        },
        error: function(xhr, status, error) {
            console.error('Error loading ' + file + ':', error);
            $(targetSelector).html('<p class="text-red-500">Error loading content</p>');
        }
    });
}

/**
 * Load and render application cards from markdown files
 */
function loadApplications() {
    $.ajax({
        url: 'content/applications.json',
        dataType: 'json',
        success: function(apps) {
            renderApplicationCards(apps);
        },
        error: function(xhr, status, error) {
            console.error('Error loading applications:', error);
            // Fallback: try to load from a single markdown file
            loadApplicationsFromMarkdown();
        }
    });
}

/**
 * Render application cards from JSON data
 */
function renderApplicationCards(apps) {
    var grid = $('#applications-grid');
    grid.empty();

    apps.forEach(function(app) {
        var card = $('<div class="app-card loading">');

        var title = $('<h3>').text(app.name);
        var description = $('<p>').text(app.description);

        var links = $('<div class="flex gap-4">');
        if (app.docs) {
            links.append($('<a>')
                .attr('href', app.docs)
                .attr('target', '_blank')
                .text('Documentation →'));
        }
        if (app.repo) {
            links.append($('<a>')
                .attr('href', app.repo)
                .attr('target', '_blank')
                .text('Repository →'));
        }

        card.append(title, description, links);
        grid.append(card);
    });
}

/**
 * Fallback: load applications from markdown file
 */
function loadApplicationsFromMarkdown() {
    $.ajax({
        url: 'content/applications.md',
        dataType: 'text',
        success: function(data) {
            var html = marked.parse(data);
            $('#applications-grid').html(html).addClass('loading');
        },
        error: function(xhr, status, error) {
            console.error('Error loading applications markdown:', error);
            $('#applications-grid').html('<p class="text-red-500">No applications data found</p>');
        }
    });
}
