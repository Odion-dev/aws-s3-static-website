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



🧾 Notes

Ensure your S3 bucket name is globally unique

Double-check file paths for CSS/JS if styling doesn’t appear
You do not need --acl public-read for buckets with ACLs disabled (default for new S3 buckets)
            
