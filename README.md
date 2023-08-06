# Linkhub
A super-simple free web template to store and share your links like Linktree or Link-in-bio.

## Features
- 😊 No installation or fancy setup; just replace links/icons!
- ⚡ Uses light-weight CSS framework [chota](https://github.com/jenil/chota); entire size of site is around 150kb!
- 🌙 Switch between dark and light modes; automatically chooses mode based on your system preference!
- 😍 Icons powered by [iconify](https://github.com/iconify/iconify); find tons of free icons for almost any purpose!
- 🔠 Categorize links; feel free to store your links under various categories!

## Screenshots
<img src="https://github.com/digitalmalayali/Linkhub/assets/61133303/0fc6a36c-6189-45df-94ae-3af9413d0cc0" alt="Dark Mode" width=720/><figcaption>Dark Mode</figcaption>

<img src="https://github.com/digitalmalayali/Linkhub/assets/61133303/babe4279-a89b-444f-bf94-cc6f3a6e611c" alt="Dark Mode" width=720/><figcaption>Light Mode</figcaption>

## Usage
The first step is to click the **Use this template** button above the file list to create a new repository.

### Modify social media links
Go to [index.html](https://github.com/digitalmalayali/Linkhub/blob/main/index.html) file. Social media links are under, 

```css 
<nav class="nav">
```

Just replace the existing links with yours and you're done!

```css 
<a class="brand" href="https://www.instagram.com/example/" target="_blank" aria-label="Instagram">
```

#### Change social media icon and icon colour
Go to [iconfiy icon sets](https://icon-sets.iconify.design/) and search for the icon you want. For e.g., if you want to replace the existing Instagram icon with another from a different set, copy the unique icon name and paste it into the `data-icon` attribute. You can also change the icon colour right there to match your branding or specific needs.

```css 
<span class="iconify-inline" data-icon="iconoir:instagram" style="color: #0054ff"></span>
```

#### Add/remove a social media icon along with the link
Just add/remove that entire `<a>` tag!

```css 
<a class="brand" href="https://www.instagram.com/example/" target="_blank" aria-label="Instagram">
  <span class="iconify-inline" data-icon="ri:instagram-fill" style="color: #0054ff"></span>
</a>
```

### Modifying link buttons
Link buttons are in the `<main>` tag. You can replace the existing links and icons just like you did for social media links.

```css 
<a class="button outline secondary" href="https://www.example.com/" target="_blank">
  <span class="iconify-inline" data-icon="ri:ball-pen-fill"></span>Example
</a>
```

#### Add/remove a button
Add/remove the entire class named `row'.

```css 
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

```css 
<h5 class="text-center">Blogs</h5>
```

#### Add/remove the NEW tag
Add/remove the `<span class="tag">`. Also, make sure to use/remove `<div class="col link">` instead of `<div class="col">`.

```css
<div class="row">
  <div class="col link is-center">
    <a class="button outline secondary" href="https://example.com/" target="_blank">
      <span class="iconify-inline" data-icon="ri:radio-fill"></span>Example
    </a>
        <span class="tag is-small bd-success text-success">New</span>
  </div>
</div>
```

#### Changing text and link button colours
Refer [chota documentation](https://jenil.github.io/chota/#docs).
