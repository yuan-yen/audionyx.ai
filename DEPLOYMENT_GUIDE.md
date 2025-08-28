# AWS Amplify Deployment Guide for Audionyx Website

## Prerequisites
- AWS Account with appropriate permissions
- Git repository (GitHub, GitLab, or Bitbucket)
- Code pushed to your repository

## Step-by-Step Deployment Instructions

### 1. Prepare Your Repository

Ensure your code is committed and pushed to your git repository:
```bash
cd react-audionyx-web
git add .
git commit -m "Prepare for AWS Amplify deployment"
git push origin main
```

### 2. Access AWS Amplify Console

1. Log in to your AWS Account
2. Navigate to AWS Amplify service (search "Amplify" in the AWS Console)
3. Click "Get Started" or "New app" → "Host web app"

### 3. Connect Your Repository

1. Choose your git provider (GitHub/GitLab/Bitbucket)
2. Authorize AWS Amplify to access your repository
3. Select your repository: `aowl-service`
4. Select the branch: `main` (or your preferred branch)

**IMPORTANT - Monorepo/Folder Selection:**

Option A - If you see "Connecting a monorepo? Pick a folder":
- Check this checkbox
- Enter the folder path: `react-audionyx-web`

Option B - If you don't see the monorepo option:
- Continue to Build Settings
- Click "Edit" under the build specification
- Modify the build commands to include the path:
  ```yaml
  version: 1
  applications:
    - appRoot: react-audionyx-web
      frontend:
        phases:
          preBuild:
            commands:
              - cd react-audionyx-web
              - npm ci
          build:
            commands:
              - npm run build
        artifacts:
          baseDirectory: react-audionyx-web/build
          files:
            - '**/*'
        cache:
          paths:
            - react-audionyx-web/node_modules/**/*
  ```

Option C - Alternative approach:
- In the "Build and test settings" section
- Look for "Build settings" 
- Click "Edit"
- Add an environment variable:
  - Variable: `_LIVE_UPDATES`
  - Value: `[{"name":"Amplify CLI","pkg":"@aws-amplify/cli","type":"npm","version":"latest"}]`
- Under "Build image settings", you might see "App root directory"
- Enter: `react-audionyx-web`

### 4. Configure Build Settings

AWS Amplify should auto-detect the build settings from `amplify.yml`. Verify the settings:

- **App name**: Audionyx
- **Environment**: Production
- **Build and test settings**: Should show:
  ```yaml
  version: 1
  frontend:
    phases:
      preBuild:
        commands:
          - npm ci
      build:
        commands:
          - npm run build
    artifacts:
      baseDirectory: build
      files:
        - '**/*'
    cache:
      paths:
        - node_modules/**/*
  ```

### 5. Configure Environment Variables (Optional)

In the Amplify Console:
1. Go to App settings → Environment variables
2. Add any required environment variables:
   - `REACT_APP_ENV`: `production`
   - `GENERATE_SOURCEMAP`: `false`

### 6. Advanced Settings (Optional but Recommended)

Before deploying, configure these settings:

1. **Redirects and rewrites** (for React Router):
   - Go to App settings → Rewrites and redirects
   - Add a new rule:
     - Source: `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf|map|json)$)([^.]+$)/>`
     - Target: `/index.html`
     - Type: `200 (Rewrite)`

2. **Custom headers** (for security):
   - Go to App settings → Custom headers
   - Add headers:
     ```yaml
     customHeaders:
       - pattern: '**/*'
         headers:
           - key: 'X-Frame-Options'
             value: 'SAMEORIGIN'
           - key: 'X-Content-Type-Options'
             value: 'nosniff'
           - key: 'X-XSS-Protection'
             value: '1; mode=block'
     ```

### 7. Deploy

1. Click "Save and deploy"
2. AWS Amplify will start building and deploying your application
3. Monitor the deployment progress in the console
4. The deployment typically takes 3-5 minutes

### 8. Access Your Application

Once deployed successfully:
1. You'll receive a default Amplify URL: `https://main.d1234567890abc.amplifyapp.com`
2. Click on the URL to view your live website

### 9. Configure Custom Domain (Optional)

To use your own domain (e.g., audionyx.ai):

1. Go to App settings → Domain management
2. Click "Add domain"
3. Enter your domain: `audionyx.ai`
4. Configure subdomains (www, or root domain)
5. Follow the DNS configuration instructions provided by AWS
6. Update your domain's DNS records with your domain registrar
7. Wait for SSL certificate provisioning (can take up to 48 hours)

### 10. Set Up Continuous Deployment

AWS Amplify automatically sets up CI/CD:
- Every push to your connected branch triggers a new build and deployment
- You can configure branch-specific deployments for staging/development

### 11. Monitoring and Logs

- **Build logs**: Available in the Amplify Console for each deployment
- **Access logs**: Go to "Monitoring" tab to view access patterns
- **Alarms**: Set up CloudWatch alarms for error monitoring

## Important Files in Your Project

1. **amplify.yml** - Build configuration (already created)
2. **.env.production** - Production environment variables (already created)
3. **package.json** - Ensure build script is present
4. **public/** - Static assets including images

## Build Commands Reference

```bash
# Local testing before deployment
npm install
npm run build
npm start

# The build folder should be created successfully
ls -la build/
```

## Troubleshooting

### Common Issues and Solutions

1. **Build Failure - Module not found**
   - Ensure all dependencies are in package.json
   - Check for case-sensitive import issues

2. **Build Failure - TypeScript errors**
   - Run `npm run build` locally first
   - Fix any TypeScript compilation errors

3. **404 on routes**
   - Ensure redirect rules are configured for SPA routing

4. **Images not loading**
   - Verify images are in the public folder
   - Check image paths start with `/`

5. **Build timeout**
   - Increase build timeout in App settings → Build settings
   - Default is 30 minutes, can increase if needed

## Performance Optimization

1. **Enable Amplify Performance Mode**:
   - Go to App settings → Performance mode
   - Enable for faster content delivery

2. **Configure Cache Headers**:
   ```yaml
   - pattern: '**/*.{js,css}'
     headers:
       - key: 'Cache-Control'
         value: 'public, max-age=31536000, immutable'
   - pattern: '**/*.{png,jpg,jpeg,gif,svg,ico}'
     headers:
       - key: 'Cache-Control'
         value: 'public, max-age=86400'
   ```

## Cost Considerations

AWS Amplify pricing includes:
- Build minutes: 1000 minutes/month free
- Hosting: $0.15 per GB served
- Storage: $0.023 per GB stored/month
- Free tier available for small applications

## Security Best Practices

1. Never commit sensitive data to the repository
2. Use environment variables for API keys
3. Enable branch protection on your main branch
4. Regularly update dependencies
5. Monitor security alerts in GitHub/GitLab

## Support and Resources

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [React on Amplify Guide](https://docs.amplify.aws/guides/hosting/react/q/platform/js/)
- [Amplify Support Forum](https://github.com/aws-amplify/amplify-hosting/issues)

## Contact

For application-specific issues: info@audionyx.ai

---

Last updated: 2025