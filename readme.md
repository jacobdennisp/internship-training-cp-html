# HTML Authentication POC

This project is a simple Proof of Concept (POC) for an authentication system built using only HTML.  
It includes basic page navigation using anchor tags without any CSS or JavaScript.

## 📁 Project Structure

The project contains the following 5 HTML pages:

- `login.html`
- `register.html`
- `forgot-password.html`
- `reset-password.html`
- `dashboard.html`

## 🔗 Page Redirections

All pages are connected using anchor (`<a>`) tags for navigation:

- Login page links to:
  - Register page
  - Forgot Password page
  - Dashboard page (after login)

- Register page links to:
  - Login page

- Forgot Password page links to:
  - Reset Password page
  - Login page

- Reset Password page links to:
  - Login page

- Dashboard page links to:
  - Login page (Logout)

## 🚀 How to Run

1. Download or clone the repository.
2. Open `login.html` in any web browser.
3. Navigate between pages using the provided links.

## 📝 Notes

- This project uses only plain HTML.
- No CSS or JavaScript has been added.
- All redirections are handled using anchor tags.
- Repository is public as required for grading.

## 🔗 Repository Link Format

Submit your repository in this format:
