# LeaveFlow – Employee Leave Management System

A simple bilingual (Arabic/English) static website demo. It uses HTML, CSS, Bootstrap 5, vanilla JavaScript, and browser `localStorage`. No backend or build tools are required.

## Pages
- `index.html` – landing page
- `login.html` – employee login
- `register.html` – employee registration
- `dashboard.html` – personalized dashboard
- `leave-request.html` – submit a leave request
- `my-requests.html` – search and filter request history
- `profile.html` – employee profile

## Run locally
Open `index.html` in a modern browser. An internet connection is needed to load Bootstrap and Bootstrap Icons from their CDNs.

## Demo account
- Username: `demo`
- Password: `demo123`

You can also register a new demo employee. User accounts and leave requests are stored in the current browser's local storage.

## Publish on GitHub Pages
1. Create a GitHub repository, for example `LeaveFlow`.
2. Upload all files and folders in this project (upload the contents, not the ZIP file).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. Open the URL shown in the Pages settings.

## Important demo limitation
This is a front-end portfolio/demo project, not a secure production leave system. `localStorage` is not secure authentication, data is stored only in the browser/device where it was entered, and employees on different devices do not share data. Do not use real employee personal information or passwords. A real organization-wide system needs a backend, database, secure authentication, access controls, and HTTPS.
