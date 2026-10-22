# Trusted Hands Appliance Repair: Website

The website for Trusted Hands Appliance Repair. It is plain HTML (no build step, no software to install).

```
index.html                     Home page
services/*.html                One page per service (refrigerator, washer, dryer,
                               dishwasher, oven and range, garbage disposal)
privacy.html, terms.html,
accessibility.html             Legal pages
assets/styles.css              All styling (colors are at the top)
assets/site.js                 Small script for the request form
assets/logo.png, technician.jpg  Images
```

## Put it online with GitHub Pages (free)

1. Create a free account at github.com and click **New repository**. Name it, for example, `trusted-hands-website`.
2. Choose **Public** (GitHub Pages on a free account needs a public repository).
3. On the new repository page, click **uploading an existing file**, drag in everything from this folder (`index.html`, the `assets` folder, `README.md`, `.gitignore`, `.nojekyll`), and click **Commit changes**.
4. Go to **Settings, then Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, pick the **main** branch and the **/ (root)** folder, and click **Save**.
5. After a minute or two your site is live at `https://YOUR-USERNAME.github.io/trusted-hands-website/`.

### Use your own domain (optional)

In **Settings, then Pages**, enter your domain under **Custom domain**, then add the DNS records GitHub shows you at your domain registrar. Turn on **Enforce HTTPS** once it becomes available.

## How to update the site

**In your browser:** open `index.html` in the repository, click the pencil icon (Edit), change the text, and click **Commit changes**. The live site updates within a minute or two.

**On your computer:** install Git, then:

```
git clone https://github.com/YOUR-USERNAME/trusted-hands-website.git
# edit index.html, then:
git add .
git commit -m "Update site"
git push
```

To preview before publishing, double-click `index.html` to open it in your browser.

## Replace before launch

The phone number and email appear on every page (header, footer, and each service page), so use **Replace in All Files** in a code editor such as VS Code (free), or ask Claude to regenerate the site with the new details. Replace:

| Find | Replace with |
| --- | --- |
| `(555) 123-4567` | Your real phone number |
| `+15551234567` | Your phone in the format `+1` followed by 10 digits (used by tap-to-call) |
| `hello@example.com` | Your real email |
| `href="#" id="rev"` | Your Google review link, for example `href="https://g.page/r/..." id="rev"` |

Also check the footer hours, the service page text (for example, that you repair gas ovens), the "Licensed and insured" and "Repairs backed by a warranty" points near the top of the page, and the Privacy Policy, Terms of Use, and Accessibility text in `privacy.html`, `terms.html`, and `accessibility.html`. Have an Illinois attorney review the legal text once.

## Make the request form send messages

The form currently only shows a confirmation and does not send anything. To receive requests by email, connect it to a form service such as Formspree or Basin: create a form there, set the `<form>` tag's `action` to the URL they give you, set `method="POST"`, and remove the form code from `assets/site.js`. Do this on every page that has the form (home and all service pages).

## If you add tracking later

The Privacy Policy states that the site uses no advertising or analytics trackers. If you add Google Analytics, a Facebook pixel, or similar, update the policy first.

## Common edits

- **A service page:** edit the matching file in `services/`. The problems list, tip, and questions are plain text near the top of the file.
- **Services list on the home page:** edit the `<ul class="services">` list in `index.html`. To add a service, copy one of the files in `services/`, rename it, change the text, and link to it from the home page and footer.
- **Towns:** edit the `<ul class="towns">` list (and the footer's Service area line, plus the "Where we work" line on each service page).
- **Colors:** the `:root` block at the top of the `<style>` section holds the color settings.
