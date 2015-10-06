﻿# MyTheme

**MyTheme** is an *easy-to-use*, *customizable* and *responsive* **Ghost**<sup id="t1">[1](#f1)</sup> theme. 
See it in action on www.blog.oliastic.com!

![MyTheme](http://www.blog.oliastic.com:8080/content/images/MyTheme_Demo.png)




## Features

* Customizable via config file
* Responsive design for different screen sizes
* Optional search function
* Additional menu items 
* Configurable comment threads
* Layout options for static pages



## Installation

1. Download the [MyTheme GitHub ZIP](https://github.com/oliastic/MyTheme/archive/master.zip) 
2. Unzip the main folder from the archive to the themes folder of your Ghost installation: `[GHOST-INSTALLATION]/content/themes/MyTheme-master`
3. Rename the folder from `MyTheme-master` to `MyTheme`
4. Restart your Ghost blog
5. Go to the **Ghost Config Environment**: `http://[YOUR-BLOG-URL]/ghost`
6. On the settings page select **MyTheme** under *Themes*
7. Save the settings
8. Follow the instructions below for [configuring](#Configuration) **MyTheme** according to your wishes



## Configuration

### Ghost Config Environment

The following elements configured in the **Ghost Config Environment** (`http://[YOUR-BLOG-URL]/ghost`) are used by **MyTheme**:

* Blog Title, Description, Logo, Cover
* User Name, Location, Website, Bio, Cover, Picture
* Tag Name, Description, Image
* Navigation Entries

Of course you do not have to define every single one of them. Just leave all things blank that you do not want to show up!





### Basic configuration via config file

**MyTheme** uses a single file file for the basic configuration! 

Open the `config.js` located under

`[GHOST-INSTALLATION]/content/themes/MyTheme/assets/js/`

in a text editor and adapt the settings described below according to your wishes!

---

#### Blog Header

##### `my_theme_do_hide_blogtitle`
Set to ***true*** if no **Blog Title** should appear in the **Blog Header**. This is useful when using a **Blog Logo** that contains the title of the blog itself. 
Set to ***false*** otherwise.



##### `my_theme_do_hide_blogdescription`
Set to ***true*** if no **Blog Description** should appear in the **Blog Header**. This is useful when using a **Blog Logo** that contains the description of the blog itself. 
Set to ***false*** otherwise.



##### `my_theme_do_align_bloglogo_vertically`
Set to ***true*** if the **Blog Logo** should be aligned vertically in front of the **Blog Title**. 
Set to ***false*** to align the **Blog Logo** horizontally before the **Blog Title**. 



#### Search Field

##### `my_theme_do_display_search_field`
Set to ***true*** if a search field based on **GhostHunter**<sup id="t2">[2](#f2)</sup> should be displayed in the navigation menu. 
Set to ***false*** otherwise.


##### `my_theme_do_display_search_field_in_separate_row`
Set to ***true*** if the search field should be displayed in a separate row within the navigation. 
Set to ***false*** otherwise. 



#### Bonus Pages

**MyTheme** allows you to define up to 3 additional bonus pages. 
All regular menu items (defined in the **Ghost Config Environment**)  will appear on the left side (or on the top for small screens) of the navigation menu.
All bonus pages will appear on the right side (or on the bottom for small screens) of the navigation menu. 

##### `my_theme_bonus_page_name_1`, `my_theme_bonus_page_name_2`, `my_theme_bonus_page_name_3`
Set to short name of the page that should appear in the navigation menu (e.g. `About`). 
Set to `""` if bonus page should not be used.

##### `my_theme_bonus_page_link_1`, `my_theme_bonus_page_link_2`, `my_theme_bonus_page_link_3`
Set to relative or absolute link to the page (e.g. `/about` or `http://[SOME-URL]`). 
Set to `""` if bonus page should not be used.



#### Static Pages

##### `my_theme_static_page_do_show_time_stamp`
Set to ***true*** if time stamp should be displayed at the top of static pages. 
Set to ***false*** otherwise.


##### `my_theme_static_page_do_show_share_links`
Set to ***true*** if share links should be displayed at the bottom of static pages. 
Set to ***false*** otherwise.


##### `my_theme_static_page_do_show_author_info`
Set to ***true*** if author information should be displayed at the bottom of static pages. 
Set to ***false*** otherwise.


##### `my_theme_static_page_do_show_comments`
Set to ***true*** if comments should be displayed at the bottom of a static pages. 
Set to ***false*** otherwise. 



#### Comments

##### `my_theme_disqus_do_activate_comments`
Set to ***true*** if **Disqus**<sup id="t3">[3](#f3)</sup> comments should be displayed at the bottom of posts. 
Set to ***false*** otherwise.



##### `my_theme_disqus_do_create_thread_per_post`
Set to ***true*** if separate comment thread should be created for each page. 
Set to ***false*** to use one global comment thread shared by all posts of your blog.


##### `my_theme_disqus_shortname`
Set to the *Disqus shortname* that you have registered for your blog.

* *Disqus identifier*, *title* and *url* are automatically set by **MyTheme**!
* Comment threads will be kept when blog is moved to another URL






### Additional configuration


#### Favicon

Just replace the `favicon.ico' located under

`[GHOST-INSTALLATION]/content/themes/MyTheme/assets/`

with your own **Favicon Icon**!




#### Style Sheet

To further adapt the design and layout of **MyTheme** according to your wishes edit the `style_default.css` located under  

`[GHOST-INSTALLATION]/content/themes/MyTheme/assets/css/`

**Hint:** Right at the top of the style sheet you will find a section called `DESIGN COLORS AND FONTS`! 



## Further Remarks

* **MyTheme** is published under **The MIT License (MIT)**<sup id="t4">[4](#f4)</sup>
* Of course you can use and change **MyTheme** as you like 
* It would be nice, if you leave the short **reference to my website** in the footer (or instead add a reference to my website somewhere else). Thanks!

But now, have fun blogging, coding or whatever!

---

<a id="f1">1.</a> Visit https://ghost.org [↩](#t1)

<a id="f2">2.</a> Visit https://github.com/jamalneufeld/ghostHunter [↩](#t2)

<a id="f3">3.</a> Visit https://disqus.com [↩](#t3)

<a id="f4">4.</a> Visit https://opensource.org/licenses/MIT [↩](#t4)


