# Deployment Guide for HFCL DCI

This document provide instructions on how to build and deploy the HFCL DCI (Data Center Interconnect) web application to various hosting platforms.

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn

## Build the Application
Before deploying, you must create a production build of the application. This generates optimized files in the `dist` folder.

```bash
npm run build
```

---

## 1. Static Hosting (Recommended)
Since this is a Vite-based React application, it can be hosted on any static site hosting service.

### Vercel / Netlify
1. Connect your GitHub/GitLab repository to Vercel or Netlify.
2. Configure the build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Click **Deploy**.

### GitHub Pages
1. Install the `gh-pages` package: `npm install -D gh-pages`
2. Update `vite.config.js` to include the base path: `base: '/your-repo-name/'`
3. Add a deploy script to `package.json`: `"deploy": "npm run build && gh-pages -d dist"`
4. Run `npm run deploy`.

---

## 2. Shared Hosting (cPanel / HostGator / Bluehost)
1. Run `npm run build` locally.
2. Use an FTP client (like FileZilla) or the cPanel File Manager.
3. Upload all files from the local `dist` folder to your server's `public_html` directory (or a subdirectory).
4. **Crucial for SPA Routing:** Create a `.htaccess` file in the same directory as `index.html` to handle client-side routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 3. VPS (AWS EC2 / DigitalOcean / Nginx)
If you are using a Linux server with Nginx:

1. Build the project: `npm run build`
2. Upload the `dist` folder to the server (e.g., `/var/www/hfcl-dci`).
3. Configure Nginx (usually in `/etc/nginx/sites-available/default`):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/hfcl-dci/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```
4. Restart Nginx: `sudo systemctl restart nginx`

---

## 4. Docker Deployment
1. Create a `Dockerfile` in the root directory:
   ```dockerfile
   # Build stage
   FROM node:18-alpine as build-stage
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   # Production stage
   FROM nginx:stable-alpine as production-stage
   COPY --from=build-stage /app/dist /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```
2. Build and run the image:
   ```bash
   docker build -t hfcl-dci .
   docker run -p 80:80 hfcl-dci
   ```
