# cPanel Deployment Guide

This guide will help you deploy your GetBucks website to cPanel from GitHub.

## Prerequisites

1. A cPanel hosting account
2. Your GitHub repository URL
3. SSH access to your cPanel (optional but recommended)

## Method 1: Using cPanel Git Version Control (Recommended)

### Step 1: Build Your Application Locally

1. Make sure all your changes are committed and pushed to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

### Step 2: Build the Production Version

1. Install dependencies (if not already done):
   ```bash
   npm install
   ```

2. Build the production version:
   ```bash
   npm run build
   ```

   This creates a `dist` folder with all the production files.

### Step 3: Set Up in cPanel

1. **Log into cPanel**

2. **Navigate to Git Version Control** (usually under "Files" section)

3. **Create a New Repository**:
   - Click "Create"
   - Repository Name: `getbucks-site` (or your preferred name)
   - Repository URL: Your GitHub repository URL (e.g., `https://github.com/username/12-getbucks-site.git`)
   - Repository Branch: `main` (or your default branch)
   - Click "Create"

4. **Clone the Repository**:
   - After creating, click "Manage"
   - Click "Update from Remote"
   - This will clone your repository to your cPanel

### Step 4: Build on Server (if Node.js is available)

If your cPanel has Node.js support:

1. **Navigate to Node.js Selector** in cPanel
2. **Create a Node.js App**:
   - Point it to your cloned repository folder
   - Set the application root to your repository folder
   - Set startup file to: `server.js` (you'll need to create this)
   - Click "Create"

3. **Install Dependencies and Build**:
   - SSH into your server or use Terminal in cPanel
   - Navigate to your repository folder
   - Run: `npm install`
   - Run: `npm run build`

### Step 5: Configure Document Root

1. **Point Your Domain to the Build Folder**:
   - In cPanel, go to **File Manager**
   - Navigate to your repository folder
   - The build files are in the `dist` folder
   - Copy all files from `dist` to your `public_html` folder (or your domain's document root)

   OR

   - In cPanel, go to **Subdomains** or **Addon Domains**
   - Set the document root to: `/home/username/repository-name/dist`

### Step 6: Ensure .htaccess is in Place

1. Make sure the `.htaccess` file is in your `dist` folder (or document root)
2. The `.htaccess` file handles React Router routing and security headers

## Method 2: Manual Upload (Alternative)

If Git Version Control is not available:

### Step 1: Build Locally

```bash
npm install
npm run build
```

### Step 2: Upload Files

1. **Compress the dist folder**:
   - Create a zip file of the `dist` folder contents

2. **Upload via cPanel File Manager**:
   - Log into cPanel
   - Go to **File Manager**
   - Navigate to `public_html` (or your domain's document root)
   - Upload the zip file
   - Extract it in the document root

3. **Upload .htaccess**:
   - Make sure the `.htaccess` file is in your document root

### Step 3: Verify

1. Visit your domain in a browser
2. Test all routes to ensure React Router is working
3. Check browser console for any errors

## Method 3: Using GitHub Actions (Advanced)

You can set up automated deployment using GitHub Actions:

1. Create `.github/workflows/deploy.yml` in your repository
2. Configure it to build and deploy to your cPanel via FTP/SFTP
3. This requires FTP credentials and server access

## Important Notes

1. **Base Path**: If your site is not in the root directory, update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/your-subdirectory/',
     // ... rest of config
   })
   ```

2. **Environment Variables**: If you have environment variables, set them in cPanel or use a `.env` file

3. **SSL Certificate**: Make sure your domain has an SSL certificate installed in cPanel

4. **File Permissions**: Ensure proper file permissions (typically 644 for files, 755 for directories)

## Troubleshooting

- **404 Errors on Routes**: Make sure `.htaccess` is in your document root and mod_rewrite is enabled
- **Build Errors**: Check Node.js version compatibility
- **Permission Errors**: Adjust file permissions in cPanel File Manager
- **Slow Loading**: Enable caching and compression in cPanel

## Post-Deployment Checklist

- [ ] Test all pages and routes
- [ ] Verify images and assets load correctly
- [ ] Check mobile responsiveness
- [ ] Test forms and interactive elements
- [ ] Verify SSL certificate is active
- [ ] Check browser console for errors
- [ ] Test on different browsers

