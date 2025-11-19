# Deploying to cPanel Without Changing Document Root

There are several ways to serve your `dist` folder without changing the document root in cPanel:

## Option 1: Copy Files from dist to public_html (Simplest & Recommended)

This is the easiest and most reliable method:

1. **After pulling from git in cPanel:**
   - Go to **File Manager** in cPanel
   - Navigate to your repository folder (e.g., `repositories/your-repo-name/`)
   - Go into the `dist` folder
   - Select all files (Ctrl+A or Cmd+A)
   - Click **Copy**
   - Navigate to `public_html`
   - Click **Paste**

2. **Upload the .htaccess file:**
   - Copy the `.htaccess` from `dist` folder to `public_html`

3. **Set up a deployment script** (optional):
   You can create a simple script that does this automatically after git pull.

## Option 2: Use .htaccess Rewrite Rules

If your repository is in a location like `/home/username/repositories/repo-name/`:

1. **Place this .htaccess in public_html:**
   - The file `public_html.htaccess` contains rewrite rules
   - Rename it to `.htaccess` and upload to `public_html`
   - Adjust the path in the rewrite rules based on your actual repository location

2. **Update the path in .htaccess:**
   ```apache
   # If your dist is at: /home/username/repositories/repo-name/dist
   # And public_html is at: /home/username/public_html
   # The relative path would be: ../repositories/repo-name/dist
   ```

## Option 3: Symbolic Link (If cPanel Allows)

Some cPanel hosts allow symlinks:

1. **Via SSH/Terminal:**
   ```bash
   cd ~/public_html
   ln -s ../repositories/repo-name/dist dist
   ```

2. **Then update .htaccess** to serve from the symlinked folder

## Option 4: Automated Deployment Script

Create a deployment script that runs after git pull:

1. **Create `deploy.sh` in your repository:**
   ```bash
   #!/bin/bash
   npm run build
   cp -r dist/* ~/public_html/
   cp dist/.htaccess ~/public_html/
   ```

2. **Set up in cPanel:**
   - Use **Cron Jobs** to run the script after git updates
   - Or use **Git Version Control** hooks if available

## Recommended Approach

**Option 1 (Copy files)** is the most reliable because:
- ✅ Works on all cPanel hosts
- ✅ No path configuration needed
- ✅ Simple and straightforward
- ✅ No symlink permissions issues

You can automate it with a simple script that runs after you pull from git.

## Quick Deployment Workflow

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Commit and push:**
   ```bash
   git add dist
   git commit -m "Deploy: Update dist folder"
   git push origin main
   ```

3. **In cPanel:**
   - Go to **Git Version Control**
   - Click **Update from Remote**
   - Go to **File Manager**
   - Copy all files from `repositories/your-repo/dist/` to `public_html/`
   - Copy `.htaccess` from `dist/` to `public_html/`

## Automated Script for cPanel

If you have SSH access, create a script at `~/deploy.sh`:

```bash
#!/bin/bash
cd ~/repositories/your-repo-name
git pull origin main
npm install
npm run build
cp -r dist/* ~/public_html/
cp dist/.htaccess ~/public_html/
echo "Deployment complete!"
```

Then run it via **Cron Jobs** or manually after git pulls.

