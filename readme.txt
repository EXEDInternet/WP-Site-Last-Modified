=== Last Modified ===
Contributors: exed internet
Version: 1.0
Tags: website info, modified, last, date, time
Stable tag: trunk
Requires at least: 2.5
Tested up to: 3.1
License: GPLv2 or later

== Description ==
Adds the possibility to display the date and time the website was last modified,
both directly in the template, or through a shortcode.
The plugin uses the timestamp of the last modified post for this information.

== Installation ==
1. Upload `site-last-modified.php` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Place `<?php site_last_modified(); ?>` in your templates.

== Configuration ==
Custom date / time formats can be passed into the function or into the shortcode,
see http://php.net/date for possible values.
Example:
Dutch date / time formatting
site_last_modified('l j F Y, H.i.s');

== Frequently Asked Questions ==
Where can I find valid time/date formats? A: http://php.net/date

== Changelog ==

= 1.0 =
Version 1.0: first release, supplying template function and shortcode

== Upgrade Notice ==


== Screenshots ==
-
