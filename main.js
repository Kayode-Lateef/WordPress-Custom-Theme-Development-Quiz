// ==========================================
// WORDPRESS CUSTOM THEME DEVELOPMENT QUIZ
// ==========================================

const QUESTIONS_PER_QUIZ = 20;
const QUIZ_TIME = 20;


// ==========================================
// QUESTION CLASS
// ==========================================

class Question {

    constructor(
        text,
        choices,
        answer,
        explanation = ""
    ) {

        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.explanation = explanation;
    }


    isCorrectAnswer(choice) {

        return choice === this.answer;
    }
}


// ==========================================
// QUIZ CLASS
// ==========================================

class Quiz {

    constructor(questions) {

        this.questions = questions;

        this.score = 0;

        this.questionIndex = 0;

        this.userAnswers = [];
    }


    getCurrentQuestion() {

        return this.questions[
            this.questionIndex
        ];
    }


    submitAnswer(answer) {

        const question =
            this.getCurrentQuestion();

        const isCorrect =
            question.isCorrectAnswer(answer);


        if (isCorrect) {

            this.score++;
        }


        this.userAnswers.push({

            question: question.text,

            choices: question.choices,

            selectedAnswer: answer,

            correctAnswer: question.answer,

            explanation:
                question.explanation,

            isCorrect: isCorrect

        });


        this.questionIndex++;
    }


    hasEnded() {

        return (
            this.questionIndex >=
            this.questions.length
        );
    }
}


// ==========================================
// SHUFFLE ARRAY
// ==========================================

function shuffleArray(array) {

    const shuffled = [...array];


    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            shuffled[i],
            shuffled[randomIndex]

        ] = [

            shuffled[randomIndex],
            shuffled[i]

        ];
    }


    return shuffled;
}


// ==========================================
// SHUFFLE QUESTION ANSWERS
// ==========================================

function shuffleQuestionChoices(question) {

    return new Question(

        question.text,

        shuffleArray(
            question.choices
        ),

        question.answer,

        question.explanation
    );
}


// ==========================================
// WORDPRESS CUSTOM THEME DEVELOPMENT
// QUESTION BANK
//
// 60 QUESTIONS
// Beginner → Intermediate → Practical
// ==========================================

const questionBank = [

    // ======================================
    // PART 1
    // FUNDAMENTALS
    // ======================================

    new Question(
        "Which file contains the theme header information such as Theme Name, Author and Version in a classic WordPress theme?",
        [
            "style.css",
            "functions.php",
            "index.php",
            "theme.php"
        ],
        "style.css",
        "WordPress reads the theme header information from the comment block at the top of style.css."
    ),

    new Question(
        "What is the role of index.php in a classic WordPress theme?",
        [
            "It is the final fallback template",
            "It stores WordPress settings",
            "It connects WordPress to MySQL",
            "It loads the WordPress admin area"
        ],
        "It is the final fallback template",
        "In the classic template hierarchy, index.php is the final template WordPress can fall back to when a more specific template is unavailable."
    ),

    new Question(
        "Which theme file is commonly used to register theme features, menus, styles and scripts?",
        [
            "functions.php",
            "header.php",
            "single.php",
            "archive.php"
        ],
        "functions.php",
        "functions.php is loaded with the active theme and is commonly used for theme setup, hooks, menus and asset loading."
    ),

    new Question(
        "Which function loads header.php?",
        [
            "get_header()",
            "wp_header()",
            "load_header()",
            "include_header()"
        ],
        "get_header()",
        "get_header() loads the theme's header template."
    ),

    new Question(
        "Which function loads footer.php?",
        [
            "get_footer()",
            "wp_footer_file()",
            "load_footer()",
            "include_footer()"
        ],
        "get_footer()",
        "get_footer() loads the theme's footer template."
    ),

    new Question(
        "Which function normally loads sidebar.php?",
        [
            "get_sidebar()",
            "wp_sidebar()",
            "load_sidebar()",
            "include_sidebar()"
        ],
        "get_sidebar()",
        "get_sidebar() loads the theme's sidebar template."
    ),

    new Question(
        "Which function should normally appear inside the <head> element of a classic WordPress theme?",
        [
            "wp_head()",
            "get_head()",
            "wp_header()",
            "theme_head()"
        ],
        "wp_head()",
        "wp_head() allows WordPress core, plugins and themes to output information required in the document head."
    ),

    new Question(
        "Which function should normally be called shortly before the closing </body> tag?",
        [
            "wp_footer()",
            "get_footer_scripts()",
            "wp_end()",
            "close_theme()"
        ],
        "wp_footer()",
        "wp_footer() fires an important WordPress hook used by core, themes and plugins, including for footer scripts."
    ),

    new Question(
        "Which function checks whether the current WordPress query has posts available?",
        [
            "have_posts()",
            "has_posts()",
            "get_posts()",
            "posts_exist()"
        ],
        "have_posts()",
        "have_posts() determines whether there are posts remaining in the current Loop."
    ),

    new Question(
        "Which function advances The Loop to the next post and sets up its post data?",
        [
            "the_post()",
            "next_post()",
            "get_post()",
            "setup_post()"
        ],
        "the_post()",
        "the_post() advances the Loop and prepares the current post so template tags can use its data."
    ),

    new Question(
        "Which template tag displays the current post title?",
        [
            "the_title()",
            "get_title()",
            "post_title()",
            "wp_title()"
        ],
        "the_title()",
        "the_title() outputs the current post's title."
    ),

    new Question(
        "Which template tag displays the current post's main content?",
        [
            "the_content()",
            "post_content()",
            "get_content()",
            "wp_content()"
        ],
        "the_content()",
        "the_content() outputs the main content of the current post."
    ),

    new Question(
        "Which function outputs the current post's featured image?",
        [
            "the_post_thumbnail()",
            "the_featured_image()",
            "post_image()",
            "wp_thumbnail()"
        ],
        "the_post_thumbnail()",
        "the_post_thumbnail() displays the featured image when post-thumbnail support is enabled."
    ),

    new Question(
        "Which function is used to enable supported WordPress theme features?",
        [
            "add_theme_support()",
            "enable_theme_feature()",
            "register_theme_support()",
            "add_theme_feature()"
        ],
        "add_theme_support()",
        "add_theme_support() tells WordPress that the theme supports a particular feature."
    ),

    new Question(
        "Which code enables featured images in a theme?",
        [
            "add_theme_support( 'post-thumbnails' );",
            "add_theme_support( 'featured-images' );",
            "register_post_images();",
            "enable_featured_images();"
        ],
        "add_theme_support( 'post-thumbnails' );",
        "WordPress uses the post-thumbnails theme feature to enable featured-image functionality."
    ),

    new Question(
        "Which function should normally be used to load a stylesheet?",
        [
            "wp_enqueue_style()",
            "wp_load_css()",
            "include_style()",
            "add_stylesheet()"
        ],
        "wp_enqueue_style()",
        "wp_enqueue_style() loads styles through WordPress's enqueue system."
    ),

    new Question(
        "Which function should normally be used to load a JavaScript file?",
        [
            "wp_enqueue_script()",
            "wp_load_js()",
            "include_script()",
            "add_javascript()"
        ],
        "wp_enqueue_script()",
        "wp_enqueue_script() loads JavaScript through WordPress's dependency-aware script system."
    ),

    new Question(
        "Which action hook is normally used for front-end styles and scripts?",
        [
            "wp_enqueue_scripts",
            "enqueue_theme",
            "load_assets",
            "theme_scripts"
        ],
        "wp_enqueue_scripts",
        "The wp_enqueue_scripts action is the standard hook for enqueueing front-end assets."
    ),

    new Question(
        "Which function displays a registered WordPress navigation menu?",
        [
            "wp_nav_menu()",
            "the_menu()",
            "get_navigation()",
            "display_menu()"
        ],
        "wp_nav_menu()",
        "wp_nav_menu() renders a WordPress navigation menu."
    ),

    new Question(
        "Which function is designed for loading reusable theme template parts?",
        [
            "get_template_part()",
            "include_template()",
            "get_partial()",
            "wp_template_file()"
        ],
        "get_template_part()",
        "get_template_part() is the standard WordPress mechanism for loading reusable template components."
    ),


    // ======================================
    // PART 2
    // TEMPLATE HIERARCHY + APPLICATION
    // ======================================

    new Question(
        "Which classic theme template is normally used for an individual blog post?",
        [
            "single.php",
            "post.php",
            "article.php",
            "content.php"
        ],
        "single.php",
        "single.php is the standard classic-theme template for an individual post when no more specific single template takes precedence."
    ),

    new Question(
        "Which template is normally used for an individual WordPress Page?",
        [
            "page.php",
            "single.php",
            "pages.php",
            "content-page.php"
        ],
        "page.php",
        "page.php is the standard template used for individual Page content."
    ),

    new Question(
        "Which template has special priority for the site's front page when it exists?",
        [
            "front-page.php",
            "home.php",
            "index.php",
            "homepage.php"
        ],
        "front-page.php",
        "front-page.php is used for the site's front page when that file exists."
    ),

    new Question(
        "What does home.php represent in the classic WordPress template hierarchy?",
        [
            "The posts index",
            "A static front page only",
            "An individual blog post",
            "The admin homepage"
        ],
        "The posts index",
        "home.php represents the blog posts index. It does not simply mean the site's homepage."
    ),

    new Question(
        "Which template handles a not-found request?",
        [
            "404.php",
            "error.php",
            "missing.php",
            "not-found.php"
        ],
        "404.php",
        "404.php is the standard theme template for a WordPress not-found response."
    ),

    new Question(
        "Which general template handles archive views when a more specific archive template is unavailable?",
        [
            "archive.php",
            "archives.php",
            "category.php",
            "posts.php"
        ],
        "archive.php",
        "archive.php is a general archive fallback before WordPress eventually reaches index.php."
    ),

    new Question(
        "If category.php is unavailable, which general template can WordPress use before falling back to index.php?",
        [
            "archive.php",
            "page.php",
            "single.php",
            "home.php"
        ],
        "archive.php",
        "Category archives can fall back through the hierarchy to archive.php and ultimately index.php."
    ),

    new Question(
        "Which template can specifically target a category with the slug news?",
        [
            "category-news.php",
            "archive-news.php",
            "news-category.php",
            "category_news.php"
        ],
        "category-news.php",
        "The classic category hierarchy supports category-{slug}.php, so a category with the slug news can use category-news.php."
    ),

    new Question(
        "Which template can specifically target a Page with the slug contact?",
        [
            "page-contact.php",
            "contact-page.php",
            "single-contact.php",
            "template-contact.php"
        ],
        "page-contact.php",
        "The Page template hierarchy can use page-{slug}.php, making page-contact.php valid for a Page whose slug is contact."
    ),

    new Question(
        "Which conditional tag checks whether the current request is displaying a single post?",
        [
            "is_single()",
            "is_post()",
            "has_post()",
            "single_post()"
        ],
        "is_single()",
        "is_single() checks whether the current query is for a single post."
    ),

    new Question(
        "Which conditional tag checks whether a WordPress Page is being displayed?",
        [
            "is_page()",
            "is_single_page()",
            "page_exists()",
            "has_page()"
        ],
        "is_page()",
        "is_page() determines whether the current request is for a Page."
    ),

    new Question(
        "Which conditional tag checks whether the site front page is being displayed?",
        [
            "is_front_page()",
            "is_home()",
            "is_homepage()",
            "is_index()"
        ],
        "is_front_page()",
        "is_front_page() checks whether the current request represents the site's front page."
    ),

    new Question(
        "What does is_home() check?",
        [
            "Whether the posts index is being displayed",
            "Whether front-page.php exists",
            "Whether the visitor is on any site's homepage",
            "Whether WordPress is installed in the root directory"
        ],
        "Whether the posts index is being displayed",
        "is_home() refers to the blog posts index, which may or may not be the site's front page."
    ),

    new Question(
        "Which function returns the URL of the current theme's stylesheet directory?",
        [
            "get_stylesheet_directory_uri()",
            "get_stylesheet_directory()",
            "get_theme_directory()",
            "stylesheet_path()"
        ],
        "get_stylesheet_directory_uri()",
        "The URI version returns a browser-accessible URL. get_stylesheet_directory() instead returns a filesystem path."
    ),

    new Question(
        "Why is get_stylesheet_directory_uri() appropriate when building a URL to an image in the theme?",
        [
            "It returns a browser-accessible theme directory URL",
            "It reads the image from the database",
            "It automatically optimizes the image",
            "It converts the image to Base64"
        ],
        "It returns a browser-accessible theme directory URL",
        "Assets referenced by the browser need URLs rather than server filesystem paths."
    ),

    new Question(
        "What is the main purpose of register_nav_menus()?",
        [
            "To register menu locations supported by the theme",
            "To immediately display every menu",
            "To create menu HTML manually",
            "To register JavaScript navigation"
        ],
        "To register menu locations supported by the theme",
        "register_nav_menus() declares theme menu locations. wp_nav_menu() is then used to render an assigned menu."
    ),

    new Question(
        "Which hook is commonly used to configure theme features during theme initialization?",
        [
            "after_setup_theme",
            "wp_enqueue_scripts",
            "template_redirect",
            "wp_footer"
        ],
        "after_setup_theme",
        "after_setup_theme is the standard hook for many theme setup operations, including adding theme support and registering certain theme features."
    ),

    new Question(
        "Which function outputs useful context-specific classes on the body element?",
        [
            "body_class()",
            "theme_class()",
            "wp_body_classes()",
            "body_style()"
        ],
        "body_class()",
        "body_class() outputs classes based on the current WordPress request, helping themes style different views."
    ),

    new Question(
        "What is the primary purpose of wp_body_open()?",
        [
            "To fire a hook immediately after the opening body tag",
            "To create the HTML body tag automatically",
            "To load body.css",
            "To start The Loop"
        ],
        "To fire a hook immediately after the opening body tag",
        "wp_body_open() fires the wp_body_open action so themes and plugins can insert markup near the beginning of the document body."
    ),

    new Question(
        "What are the two main WordPress hook types?",
        [
            "Actions and filters",
            "Headers and footers",
            "Queries and templates",
            "Posts and pages"
        ],
        "Actions and filters",
        "Actions let callbacks run at particular points, while filters allow data to be modified and returned."
    ),


    // ======================================
    // PART 3
    // PRACTICAL CODE + DEBUGGING
    // ======================================

    new Question(
        `Examine this Loop:

if ( have_posts() ) {
    while ( have_posts() ) {
        the_title();
        the_content();
    }
}

What important line is missing inside the while loop?`,
        [
            "the_post();",
            "get_post();",
            "next_post();",
            "wp_post();"
        ],
        "the_post();",
        "the_post() advances the Loop and sets up the current post. Without it, the template is not correctly progressing through the queried posts."
    ),

    new Question(
        `A developer writes:

while ( have_posts() ) {
    the_post();
    the_title();
}

What does the_post() do here?`,
        [
            "Advances to the next post and sets up its data",
            "Displays the post content",
            "Deletes the previous post",
            "Creates a new WordPress post"
        ],
        "Advances to the next post and sets up its data",
        "Inside The Loop, the_post() moves to the next result and prepares global post data for template tags."
    ),

    new Question(
        `A developer places this in header.php:

<link rel="stylesheet" href="/wp-content/themes/mytheme/style.css">

What is the better WordPress approach?`,
        [
            "Enqueue the stylesheet using wp_enqueue_style()",
            "Move the link tag to single.php",
            "Store the CSS inside functions.php",
            "Load the stylesheet using the_content()"
        ],
        "Enqueue the stylesheet using wp_enqueue_style()",
        "Theme styles should generally be loaded through the WordPress enqueue system rather than hard-coded theme paths."
    ),

    new Question(
        `A developer writes:

<script src="/wp-content/themes/mytheme/js/main.js"></script>

directly in header.php.

What is the main problem?`,
        [
            "The script bypasses WordPress's enqueue system",
            "JavaScript cannot be used in themes",
            "JavaScript must only appear in footer.php",
            "WordPress requires JavaScript inside PHP files"
        ],
        "The script bypasses WordPress's enqueue system",
        "Using wp_enqueue_script() lets WordPress manage dependencies, versions and loading while avoiding hard-coded theme URLs."
    ),

    new Question(
        `Which line correctly attaches a function named theme_assets to the front-end asset-loading hook?`,
        [
            "add_action( 'wp_enqueue_scripts', 'theme_assets' );",
            "add_filter( 'wp_enqueue_scripts', 'theme_assets' );",
            "wp_enqueue_scripts( 'theme_assets' );",
            "register_action( 'theme_assets', 'wp_enqueue_scripts' );"
        ],
        "add_action( 'wp_enqueue_scripts', 'theme_assets' );",
        "wp_enqueue_scripts is an action hook, so add_action() is used to attach the theme_assets callback."
    ),

    new Question(
        `Consider:

function theme_assets() {
    wp_enqueue_style(
        'theme-style',
        get_stylesheet_uri()
    );
}

What does get_stylesheet_uri() return here?`,
        [
            "The URL of the active theme's main style.css file",
            "The server path to functions.php",
            "The URL of the WordPress admin stylesheet",
            "The HTML contents of style.css"
        ],
        "The URL of the active theme's main style.css file",
        "get_stylesheet_uri() returns the URI for the active theme's main stylesheet."
    ),

    new Question(
        `A developer wants to display the current post title as an h2.

Which code is correct?`,
        [
            "<h2><?php the_title(); ?></h2>",
            "<h2><?php get_title(); ?></h2>",
            "<h2><?php post_title(); ?></h2>",
            "<h2><?php title_post(); ?></h2>"
        ],
        "<h2><?php the_title(); ?></h2>",
        "the_title() outputs the title of the current post."
    ),

    new Question(
        `Which code correctly creates a link to the current post inside The Loop?`,
        [
            `<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>`,
            `<a href="<?php the_title(); ?>"><?php the_permalink(); ?></a>`,
            `<a src="<?php the_permalink(); ?>"><?php the_title(); ?></a>`,
            `<link href="<?php the_permalink(); ?>"><?php the_title(); ?></link>`
        ],
        `<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>`,
        "the_permalink() provides the current post URL while the_title() supplies the visible link text."
    ),

    new Question(
        `What file will WordPress first attempt to load with:

get_template_part(
    'template-parts/content',
    'single'
);`,
        [
            "template-parts/content-single.php",
            "template-parts/single-content.php",
            "single.php",
            "template-parts/content.php"
        ],
        "template-parts/content-single.php",
        "With a slug and name, get_template_part() first looks for slug-name.php. It can fall back to the slug-only template if the named file is unavailable."
    ),

    new Question(
        `A developer writes:

<img src="<?php echo get_stylesheet_directory(); ?>/images/logo.png">

Why is this likely wrong for the browser?`,
        [
            "get_stylesheet_directory() returns a filesystem path rather than a public URL",
            "WordPress does not allow images inside themes",
            "The img element cannot contain PHP",
            "Images must be stored in the database"
        ],
        "get_stylesheet_directory() returns a filesystem path rather than a public URL",
        "Browser assets need URLs. get_stylesheet_directory_uri() is appropriate when constructing a browser-accessible theme asset URL."
    ),

    new Question(
        `Which version is appropriate for a browser-accessible theme image URL?`,
        [
            `<?php echo esc_url( get_stylesheet_directory_uri() . '/images/logo.png' ); ?>`,
            `<?php echo get_stylesheet_directory() . '/images/logo.png'; ?>`,
            `<?php echo ABSPATH . '/images/logo.png'; ?>`,
            `<?php echo WP_CONTENT_DIR . '/images/logo.png'; ?>`
        ],
        `<?php echo esc_url( get_stylesheet_directory_uri() . '/images/logo.png' ); ?>`,
        "get_stylesheet_directory_uri() produces a theme URL, and esc_url() escapes that URL for safe output."
    ),

    new Question(
        `A theme contains:

add_theme_support( 'post-thumbnails' );

but the developer says featured images still cannot be displayed automatically.

What else must the template do when the image should appear?`,
        [
            "Call a template tag such as the_post_thumbnail()",
            "Call wp_head() a second time",
            "Create featured-image.php",
            "Call register_nav_menus()"
        ],
        "Call a template tag such as the_post_thumbnail()",
        "Theme support enables the feature, but the theme must still output the featured image where appropriate."
    ),

    new Question(
        `A developer has registered a menu location named primary.

Which code is appropriate for displaying the menu assigned to it?`,
        [
            "wp_nav_menu( array( 'theme_location' => 'primary' ) );",
            "register_nav_menus( 'primary' );",
            "get_menu( 'primary' );",
            "the_navigation( 'primary' );"
        ],
        "wp_nav_menu( array( 'theme_location' => 'primary' ) );",
        "wp_nav_menu() renders a menu, and theme_location identifies the registered location whose assigned menu should be displayed."
    ),

    new Question(
        `Consider this code:

function my_theme_setup() {
    add_theme_support( 'post-thumbnails' );
}

What should normally be added so WordPress runs this setup function at the appropriate time?`,
        [
            "add_action( 'after_setup_theme', 'my_theme_setup' );",
            "add_filter( 'wp_head', 'my_theme_setup' );",
            "wp_enqueue_script( 'my_theme_setup' );",
            "get_template_part( 'my_theme_setup' );"
        ],
        "add_action( 'after_setup_theme', 'my_theme_setup' );",
        "Theme setup callbacks are commonly attached to the after_setup_theme action."
    ),

    new Question(
        `A developer writes:

if ( is_home() ) {
    echo 'Welcome to the front page';
}

Why can this logic be incorrect?`,
        [
            "is_home() checks the posts index, not necessarily the site's front page",
            "is_home() only works in the admin dashboard",
            "is_home() checks whether WordPress is installed",
            "is_home() can only be used in functions.php"
        ],
        "is_home() checks the posts index, not necessarily the site's front page",
        "The posts index and site front page can be different. is_front_page() specifically tests the site's front page."
    ),

    new Question(
        `A developer wants code to run only on the site's front page.

Which condition is the most appropriate?`,
        [
            "if ( is_front_page() )",
            "if ( is_home() )",
            "if ( is_single() )",
            "if ( is_archive() )"
        ],
        "if ( is_front_page() )",
        "is_front_page() specifically determines whether the site's front page is being displayed."
    ),

    new Question(
        `The site uses a static Page as its homepage and a separate Page for blog posts.

Which statement is correct?`,
        [
            "is_front_page() identifies the homepage while is_home() identifies the posts index",
            "is_home() and is_front_page() must always return the same result",
            "is_single() identifies the homepage",
            "is_page() identifies the posts index"
        ],
        "is_front_page() identifies the homepage while is_home() identifies the posts index",
        "With a static front page configuration, the site's front page and posts index are separate requests."
    ),

    new Question(
        `A category named News has the slug news.

The theme contains:

category.php
category-news.php
archive.php
index.php

Which template has priority for the News category archive?`,
        [
            "category-news.php",
            "category.php",
            "archive.php",
            "index.php"
        ],
        "category-news.php",
        "A category slug-specific template is more specific than the generic category.php, archive.php and index.php fallbacks."
    ),

    new Question(
        `A theme contains:

front-page.php
home.php
index.php

The site's front page displays a static Page and the posts page is assigned separately.

Which template handles the static site front page?`,
        [
            "front-page.php",
            "home.php",
            "index.php",
            "single.php"
        ],
        "front-page.php",
        "front-page.php handles the site front page when present, while home.php is associated with the posts index."
    ),

    new Question(
        `The same theme contains:

front-page.php
home.php
index.php

Which template handles the separate blog posts index?`,
        [
            "home.php",
            "front-page.php",
            "single.php",
            "page.php"
        ],
        "home.php",
        "home.php represents the posts index, including when the posts index is assigned to a separate Page."
    ),


    // ======================================
    // PART 4
    // SECURITY + DEEPER DEBUGGING
    // ======================================

    new Question(
        `A custom field contains text entered by a user.

Which function is appropriate when safely outputting it as plain HTML text?`,
        [
            "esc_html()",
            "sanitize_text_field()",
            "wp_enqueue_style()",
            "add_filter()"
        ],
        "esc_html()",
        "esc_html() escapes text at output time for an HTML text context."
    ),

    new Question(
        `A custom field contains a URL that will be placed in an href attribute.

Which function is designed for safely outputting that URL?`,
        [
            "esc_url()",
            "esc_html()",
            "sanitize_key()",
            "wp_kses_post()"
        ],
        "esc_url()",
        "esc_url() is intended for escaping URLs before output."
    ),

    new Question(
        `A value will be placed inside an HTML attribute:

<div class="VALUE">

Which escaping function is appropriate?`,
        [
            "esc_attr()",
            "esc_html()",
            "esc_url()",
            "sanitize_title()"
        ],
        "esc_attr()",
        "esc_attr() escapes values for safe output inside HTML attributes."
    ),

    new Question(
        `Consider:

<a href="<?php echo $website; ?>">
    Visit Website
</a>

If $website contains dynamic data, what improvement should be made?`,
        [
            "Escape the URL with esc_url()",
            "Escape it with esc_attr() only",
            "Pass it through the_title()",
            "Use add_action()"
        ],
        "Escape the URL with esc_url()",
        "Dynamic URL output should be escaped for the URL context using esc_url()."
    ),

    new Question(
        `Consider:

<h2>
    <?php echo $custom_title; ?>
</h2>

If $custom_title is dynamic plain text, which output is safer?`,
        [
            "<?php echo esc_html( $custom_title ); ?>",
            "<?php echo esc_url( $custom_title ); ?>",
            "<?php sanitize_text_field( $custom_title ); ?>",
            "<?php add_filter( $custom_title ); ?>"
        ],
        "<?php echo esc_html( $custom_title ); ?>",
        "esc_html() escapes dynamic text when outputting it into normal HTML text content."
    ),

    new Question(
        `What is wrong with this filter?

function change_title( $title ) {
    $title = 'Hello';
}

add_filter(
    'the_title',
    'change_title'
);`,
        [
            "The callback does not return the filtered value",
            "Filters cannot modify titles",
            "add_filter() should be replaced with wp_head()",
            "The function must echo the title"
        ],
        "The callback does not return the filtered value",
        "A filter callback must return the value that should continue through the filter chain."
    ),

    new Question(
        `Which corrected filter is appropriate?`,
        [
            `function change_title( $title ) {
    $title = 'Hello';
    return $title;
}`,
            `function change_title( $title ) {
    echo 'Hello';
}`,
            `function change_title() {
    wp_enqueue_style( 'Hello' );
}`,
            `function change_title( $title ) {
    exit( $title );
}`
        ],
        `function change_title( $title ) {
    $title = 'Hello';
    return $title;
}`,
        "Filters transform values and return the resulting value to WordPress."
    ),

    new Question(
        `A developer creates this action callback:

function theme_notice() {
    echo '<p>Hello</p>';
}

Which statement is true?`,
        [
            "An action callback can perform work without returning a filtered value",
            "Every action callback must return its first argument",
            "Actions cannot output anything",
            "The function must use add_filter()"
        ],
        "An action callback can perform work without returning a filtered value",
        "Actions are intended to run functionality at a hook point. Unlike filters, their purpose is not to transform and return a passed value."
    ),

    new Question(
        `A developer puts this in header.php:

<?php wp_head(); ?>

and removes wp_footer() from footer.php.

What type of problem can this cause?`,
        [
            "Plugins or scripts relying on the footer hook may fail to output correctly",
            "WordPress will delete functions.php",
            "The database connection will stop",
            "The theme stylesheet will automatically be deleted"
        ],
        "Plugins or scripts relying on the footer hook may fail to output correctly",
        "wp_footer() is an important hook point. Removing it can prevent scripts and plugin output attached to that hook from appearing."
    ),

    new Question(
        `A theme's header.php contains:

<body>

but nothing immediately after it for the WordPress body-open hook.

Which addition follows modern theme practice?`,
        [
            "<?php wp_body_open(); ?>",
            "<?php get_body(); ?>",
            "<?php wp_head(); ?>",
            "<?php body_class(); ?>"
        ],
        "<?php wp_body_open(); ?>",
        "wp_body_open() should be called immediately after the opening body tag to fire the wp_body_open action."
    )

];

// ==========================================
// CREATE QUIZ
// ==========================================

function createQuiz() {

    const shuffledQuestions =
        shuffleArray(questionBank);


    const selectedQuestions =
        shuffledQuestions

            .slice(
                0,
                QUESTIONS_PER_QUIZ
            )

            .map(
                shuffleQuestionChoices
            );


    return new Quiz(
        selectedQuestions
    );
}


// ==========================================
// QUIZ STATE
// ==========================================

let quiz = createQuiz();

let selectedAnswer = null;

let quizFinished = false;


// ==========================================
// DISPLAY QUESTION
// ==========================================

function displayQuestion() {

    if (quiz.hasEnded()) {

        showScore();

        return;
    }


    selectedAnswer = null;


    const currentQuestion =
        quiz.getCurrentQuestion();


    // --------------------------------------
    // QUESTION
    // --------------------------------------

    const questionElement =
        document.getElementById(
            "question"
        );


    questionElement.textContent =
        currentQuestion.text;


    // --------------------------------------
    // ANSWERS
    // --------------------------------------

    currentQuestion.choices.forEach(
        (choice, index) => {

            const choiceElement =
                document.getElementById(
                    "choice" + index
                );


            const button =
                document.getElementById(
                    "btn" + index
                );


            choiceElement.textContent =
                choice;


            button.classList.remove(
                "selected"
            );


            button.disabled = false;


            button.onclick = function () {

                selectAnswer(
                    choice,
                    index
                );
            };
        }
    );


    // --------------------------------------
    // NEXT BUTTON
    // --------------------------------------

    const nextButton =
        document.getElementById(
            "next-btn"
        );


    nextButton.disabled = true;


    nextButton.textContent =
        quiz.questionIndex ===
        quiz.questions.length - 1

            ? "Submit Quiz"

            : "Next Question";


    // --------------------------------------
    // MESSAGE
    // --------------------------------------

    const message =
        document.getElementById(
            "selection-message"
        );


    message.textContent =
        "Select an answer to continue.";


    // --------------------------------------
    // PROGRESS
    // --------------------------------------

    updateProgress();
}


// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(
    choice,
    selectedIndex
) {

    selectedAnswer = choice;


    // Remove selection from all buttons

    for (let i = 0; i < 4; i++) {

        const button =
            document.getElementById(
                "btn" + i
            );


        button.classList.remove(
            "selected"
        );
    }


    // Highlight selected button

    const selectedButton =
        document.getElementById(
            "btn" + selectedIndex
        );


    selectedButton.classList.add(
        "selected"
    );


    // Enable next button

    const nextButton =
        document.getElementById(
            "next-btn"
        );


    nextButton.disabled = false;


    // Update message

    const message =
        document.getElementById(
            "selection-message"
        );


    message.textContent =
        "Answer selected.";
}


// ==========================================
// NEXT QUESTION
// ==========================================

function goToNextQuestion() {

    if (selectedAnswer === null) {

        return;
    }


    quiz.submitAnswer(
        selectedAnswer
    );


    if (quiz.hasEnded()) {

        showScore();

        return;
    }


    displayQuestion();
}


// ==========================================
// NEXT BUTTON EVENT
// ==========================================

document
    .getElementById("next-btn")
    .addEventListener(
        "click",
        goToNextQuestion
    );


// ==========================================
// UPDATE PROGRESS
// ==========================================

function updateProgress() {

    const currentQuestionNumber =
        quiz.questionIndex + 1;


    const progress =
        document.getElementById(
            "progress"
        );


    progress.textContent =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}


// ==========================================
// PERFORMANCE MESSAGE
// ==========================================

function getPerformanceMessage(
    percentage
) {

    if (percentage >= 90) {

        return "Excellent Work!";
    }


    if (percentage >= 75) {

        return "Great Work!";
    }


    if (percentage >= 60) {

        return "Good Effort!";
    }


    if (percentage >= 50) {

        return "Keep Practising!";
    }


    return "More Practice Needed";
}


// ==========================================
// SHOW SCORE
// ==========================================

function showScore() {

    if (quizFinished) {

        return;
    }


    quizFinished = true;

    stopTimer();


    const quizElement =
        document.getElementById(
            "quiz"
        );


    const totalQuestions =
        quiz.questions.length;


    const answeredQuestions =
        quiz.userAnswers.length;


    const incorrectAnswers =
        answeredQuestions -
        quiz.score;


    const unansweredQuestions =
        totalQuestions -
        answeredQuestions;


    const percentage =
        Math.round(
            (
                quiz.score /
                totalQuestions
            ) * 100
        );


    const message =
        getPerformanceMessage(
            percentage
        );


    quizElement.innerHTML = `

        <div class="result-container">

            <p class="result-label">
                Assessment Complete
            </p>

            <h1>
                Quiz Completed
            </h1>


            <p class="result-message">
                ${message}
            </p>


            <div class="score-circle">

                <span class="score-number">

                    ${quiz.score}/${totalQuestions}

                </span>


                <span class="score-percentage">

                    ${percentage}%

                </span>

            </div>


            <div class="result-details">

                <div class="result-item correct-result">

                    <span>
                        Correct
                    </span>

                    <strong>
                        ${quiz.score}
                    </strong>

                </div>


                <div class="result-item incorrect-result">

                    <span>
                        Incorrect
                    </span>

                    <strong>
                        ${incorrectAnswers}
                    </strong>

                </div>


                <div class="result-item">

                    <span>
                        Unanswered
                    </span>

                    <strong>
                        ${unansweredQuestions}
                    </strong>

                </div>

            </div>


            <div class="result-actions">

                <button
                    type="button"
                    class="review-btn"
                    onclick="showReview()"
                >
                    Review Answers
                </button>


                <button
                    type="button"
                    class="restart-btn"
                    onclick="restartQuiz()"
                >
                    Take Quiz Again
                </button>

            </div>

        </div>
    `;
}


// ==========================================
// REVIEW ANSWERS
// ==========================================

function showReview() {

    const quizElement =
        document.getElementById(
            "quiz"
        );


    let reviewHTML = `

        <div class="review-container">

            <div class="review-header">

                <p class="result-label">
                    Assessment Review
                </p>

                <h1>
                    Review Your Answers
                </h1>

                <p>
                    Study the explanations below
                    before attempting the quiz again.
                </p>

            </div>


            <div class="review-list">
    `;


    quiz.questions.forEach(
        (question, index) => {

            const answer =
                quiz.userAnswers[index];


            // ----------------------------------
            // UNANSWERED QUESTION
            // ----------------------------------

            if (!answer) {

                reviewHTML += `

                    <article
                        class="review-card unanswered-card"
                    >

                        <div class="review-question-number">

                            Question ${index + 1}

                        </div>


                        <h2>
                            ${escapeHTML(
                                question.text
                            )}
                        </h2>


                        <div class="answer-review-row">

                            <span class="review-label">
                                Your Answer
                            </span>

                            <p class="unanswered-text">
                                Not answered
                            </p>

                        </div>


                        <div class="answer-review-row">

                            <span class="review-label">
                                Correct Answer
                            </span>

                            <p class="correct-answer-text">

                                ${escapeHTML(
                                    question.answer
                                )}

                            </p>

                        </div>


                        <div class="explanation-box">

                            <strong>
                                Explanation
                            </strong>

                            <p>

                                ${escapeHTML(
                                    question.explanation
                                )}

                            </p>

                        </div>

                    </article>
                `;


                return;
            }


            // ----------------------------------
            // ANSWERED QUESTION
            // ----------------------------------

            const statusClass =
                answer.isCorrect

                    ? "correct-card"

                    : "incorrect-card";


            const statusText =
                answer.isCorrect

                    ? "Correct"

                    : "Incorrect";


            reviewHTML += `

                <article
                    class="review-card ${statusClass}"
                >

                    <div class="review-card-top">

                        <div class="review-question-number">

                            Question ${index + 1}

                        </div>


                        <span class="review-status">

                            ${statusText}

                        </span>

                    </div>


                    <h2>

                        ${escapeHTML(
                            answer.question
                        )}

                    </h2>


                    <div class="answer-review-row">

                        <span class="review-label">
                            Your Answer
                        </span>


                        <p
                            class="${
                                answer.isCorrect
                                    ? "correct-answer-text"
                                    : "wrong-answer-text"
                            }"
                        >

                            ${escapeHTML(
                                answer.selectedAnswer
                            )}

                        </p>

                    </div>
            `;


            if (!answer.isCorrect) {

                reviewHTML += `

                    <div class="answer-review-row">

                        <span class="review-label">
                            Correct Answer
                        </span>


                        <p class="correct-answer-text">

                            ${escapeHTML(
                                answer.correctAnswer
                            )}

                        </p>

                    </div>
                `;
            }


            reviewHTML += `

                    <div class="explanation-box">

                        <strong>
                            Explanation
                        </strong>


                        <p>

                            ${escapeHTML(
                                answer.explanation
                            )}

                        </p>

                    </div>

                </article>
            `;
        }
    );


    reviewHTML += `

            </div>


            <div class="review-actions">

                <button
                    type="button"
                    class="restart-btn"
                    onclick="restartQuiz()"
                >
                    Take Quiz Again
                </button>

            </div>

        </div>
    `;


    quizElement.innerHTML =
        reviewHTML;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHTML(value) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        value;


    return div.innerHTML;
}


// ==========================================
// RESTART QUIZ
// ==========================================

function restartQuiz() {

    location.reload();
}


// ==========================================
// TIMER
// ==========================================

let timeRemaining =
    QUIZ_TIME * 60;


let timerInterval;


// ==========================================
// START TIMER
// ==========================================

function startTimer() {

    updateTimerDisplay();


    timerInterval =
        setInterval(() => {

            timeRemaining--;


            if (timeRemaining <= 0) {

                timeRemaining = 0;

                updateTimerDisplay();

                stopTimer();

                showScore();

                return;
            }


            updateTimerDisplay();

        }, 1000);
}


// ==========================================
// STOP TIMER
// ==========================================

function stopTimer() {

    if (timerInterval) {

        clearInterval(
            timerInterval
        );
    }
}


// ==========================================
// UPDATE TIMER
// ==========================================

function updateTimerDisplay() {

    const timerElement =
        document.getElementById(
            "timer"
        );


    if (!timerElement) {

        return;
    }


    const minutes =
        Math.floor(
            timeRemaining / 60
        );


    const seconds =
        timeRemaining % 60;


    timerElement.textContent =

        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    // Warning when 5 minutes remain

    if (timeRemaining <= 300) {

        timerElement.classList.add(
            "timer-warning"
        );
    }
}


// ==========================================
// START APPLICATION
// ==========================================

displayQuestion();

startTimer();