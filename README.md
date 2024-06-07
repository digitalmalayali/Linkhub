# Linkhub
A super-simple free web template to store and share your links like Linktree or Link-in-bio.

[![Static Badge](https://img.shields.io/badge/jekyll-theme-CC0000?logo=jekyll&logoColor=%23CC0000)](https://github.com/digitalmalayali/linkhub-jekyll-theme/)
[![Gem (including prereleases)](https://img.shields.io/gem/v/linkhub-jekyll-theme?logo=ruby&logoColor=%23E9573F)](https://rubygems.org/gems/linkhub-jekyll-theme)
[![Gem](https://img.shields.io/gem/dt/linkhub-jekyll-theme?logo=ruby&logoColor=%23E9573F)](https://rubygems.org/gems/linkhub-jekyll-theme)

[![Static Badge](https://img.shields.io/badge/wordpress-theme-red?logo=wordpress&labelColor=21759B)](https://github.com/digitalmalayali/linkhub-wordpress-theme)
[![WordPress Theme Version](https://img.shields.io/wordpress/theme/v/linkhub?logo=wordpress&labelColor=%2321759B)](https://wordpress.org/themes/linkhub/)
[![WordPress Theme Downloads](https://img.shields.io/wordpress/theme/dt/linkhub?logo=wordpress&labelColor=%2321759B&color=green)](https://wordpress.org/themes/linkhub/)

## Features
- 😊 No installation or fancy setup; just replace links/icons!
- 📸 Add links to Instagram posts similar to Later's link-in-bio! 
- ⚡ Uses a modified version of the lightweight CSS framework [chota](https://github.com/jenil/chota); the entire size of the site is around 250kb with minimum assets!
- 🌙 Switch between dark and light modes; automatically choose the mode based on your system preference!
- 😍 Icons powered by [iconify](https://github.com/iconify/iconify); find tons of free icons for almost any purpose!
- 🔠 Categorize links; store your links under various categories!

## Screenshots
<img src="https://github.com/digitalmalayali/Linkhub/assets/61133303/e2283f77-e60d-4601-92df-7566a7307c2b" alt="Dark Mode" width=720/><figcaption>Dark Mode</figcaption>

<img src="https://github.com/digitalmalayali/Linkhub/assets/61133303/d7f2148c-b912-44dd-a168-378af1ee07bf" alt="Dark Mode" width=720/><figcaption>Insta link-in-bio expanded</figcaption>

<img src="https://github.com/digitalmalayali/Linkhub/assets/61133303/9771278e-8018-4fb6-a1e8-807babdd1312" alt="Dark Mode" width=720/><figcaption>Light Mode</figcaption>

## Also available as
- [Jekyll Theme](https://github.com/digitalmalayali/linkhub-jekyll-theme)
- [Ruby Gem](https://rubygems.org/gems/linkhub-jekyll-theme)
- [WordPress Theme](https://github.com/digitalmalayali/linkhub-wordpress-theme)

## Usage
The first step is to click the **Use this template** button above the file list to create a new repository.

### Modify social media links
Go to [index.html](https://github.com/digitalmalayali/Linkhub/blob/main/index.html) file. Social media links are under, 

```html 
<nav class="nav">
```

Just replace the existing links with yours and you're done!

```html 
<a class="brand" href="https://www.instagram.com/example/" target="_blank" aria-label="Instagram">
```

#### Change icons and icon colour
Go to [iconify icon sets](https://icon-sets.iconify.design/) and search for the icon you want. E.g., if you want to replace the existing Instagram icon with another from a different set, copy the unique icon name and paste it into the `data-icon` attribute. You can also change the icon colour right there to match your branding or specific needs.

```html 
<span class="iconify-inline" data-icon="iconoir:instagram" style="color: #0054ff"></span>
```
#### Use custom icons in buttons
Add your custom `svg` icon inside `<span class="custom-icon">`. You can use [SVGOMG](https://jakearchibald.github.io/svgomg/) to optimize SVG.

```html
<a class="button outline secondary" href="https://productraid.com/" target="_blank">
  <span class="custom-icon">
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 3 3"><path d="M.652.2h1.446l-.238.886h.975l-.352 1.313H1.292l.114-.428h.749l.122-.457h-.374c-.684 0-1.283.46-1.46 1.12H0L.652.201ZM.98.63l-.122.457h.56L1.54.629H.98Z"/></svg>
  </span>Product Raid
</a>
```


#### Add/remove a social media icon along with the link
Just add/remove that entire `<a>` tag!

```html 
<a class="brand" href="https://www.instagram.com/example/" target="_blank" aria-label="Instagram">
  <span class="iconify-inline" data-icon="ri:instagram-fill" style="color: #0054ff"></span>
</a>
```
### Add/remove Insta link-in-bio
If you'd like to completely remove the Insta link-in-bio, remove the entire `<section>`.

```html 
<section>
  <details>
    <summary class="text-center text-error">Insta Link-in-Bio</summary>
    <div class="insta-gallery">
      <div class="insta-item">
        <a href="https://radio.digitalmalayali.in/" target="_blank" aria-label="Insta link-in-bio">
          <img class="insta-img text-center" src="https://i.ibb.co/KykYQC8/radio.webp" width="100%"
              height="100%" alt="Insta post"></a>
      </div>
    </div>
  </details>
</section>
```

Also, make sure to remove these CSS classes from `style.css` as well:

```css
section,
summary {
    margin: .8em 0 .5em
}
 
.insta-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr)
}

.insta-item {
    aspect-ratio: 1;
    margin: .2em;
    overflow: hidden
}

.insta-img {
    object-fit: cover;
    object-position: center
}
```

Adding a new link-in-bio is super easy. Make sure to add it at the start.

```html 
<div class="insta-item">
  <a href="https://radio.digitalmalayali.in/" target="_blank" aria-label="Insta link-in-bio">
    <img class="insta-img text-center" src="https://i.ibb.co/KykYQC8/radio.webp" width="100%"
      height="100%" alt="Insta post"></a>
</div>
```
### Modifying link buttons
Link buttons are in the `<main>` tag. You can replace the existing links and icons just like you did for social media links.

```html 
<a class="button outline secondary" href="https://www.example.com/" target="_blank">
  <span class="iconify-inline" data-icon="ri:ball-pen-fill"></span>Example
</a>
```

#### Add/remove a button
Add/remove the entire class named `row`.

```html 
<div class="row">
  <div class="col is-center">
    <a class="button outline secondary" href="https://www.example.com" target="_blank">
      <span class="iconify-inline" data-icon="ri:ball-pen-fill"></span>Example
    </a>
  </div>
</div>
```

#### Add/remove a category
Add/remove the `<h5>` tag.

```html 
<h5 class="text-center">Blogs</h5>
```

#### Add/remove the NEW tag
Add/remove the `<span class="tag">`. Also, make sure to use/remove `<div class="col link">` instead of `<div class="col">`.

```html
<div class="row">
  <div class="col link is-center">
      <a class="button outline secondary" href="https://radio.digitalmalayali.in/" target="_blank"><span
        class="iconify-inline" data-icon="ri:radio-fill"></span>24/7
        Radio <span class="tag is-small bd-success text-success">New</span>
      </a>
  </div>
</div>
```
