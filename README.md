🌐 AWS S3 Static Website Deploymet

This project demonstrates how to deploy a static website to AWS S3 using both a Bash automation script and a GitHub Actions CI/CD pipeline.
It automates bucket creation, hosting setup, and continuous deployment straight from GitHub.



⚙️ Technologies Used


AWS S3 – static website hosting

AWS CLI – infrastructure automation

GitHub Actions – CI/CD pipeline

Bash Script – automated deployment

HTML, CSS, JS – frontend files



🚀 Deployment Methods

Option 1: Bash Automation Script

File: deploy_s3_website.sh

This script automates:

S3 bucket creation

Static website hosting setup

File uploads to S3

Applying public read access

Run the script:

chmod +x deploy_s3_website.sh
./deploy_s3_website.sh


Script variables:

BUCKET_NAME="my-capstone-project-2025"
REGION="us-east-1"
WEBSITE_FILE="website_file"
INDEX_FILE="index.html"
ERROR_FILE="error.html"



Option 2: GitHub Actions CI/CD

File: .github/workflows/deploy.yml

Whenever you push changes to the main branch, this workflow automatically uploads your files to S3



🔑 GitHub Secrets Setup

In your GitHub repository:

Go to Settings → Secrets and Variables → Actions

Click New repository secret for each of these:

Secret Name Description
AWS_S3_BUCKET   Your S3 bucket name
AWS_ACCESS_KEY_ID   IAM user access key
AWS_SECRET_ACCESS_KEY   IAM user secret key
AWS_REGION  AWS region (e.g. us-east-1)



🧾 Notes

Ensure your S3 bucket name is globally unique

Double-check file paths for CSS/JS if styling doesn’t appear
You do not need --acl public-read for buckets with ACLs disabled (default for new S3 buckets)
            
