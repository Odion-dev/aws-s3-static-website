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

File: deploy_s3_website.sh




This Bash script automates:




S3 bucket creation and configuration




Static website hosting setup




File uploads from project folder



🧾 Notes

Ensure your S3 bucket name is globally unique

Double-check file paths for CSS/JS if styling doesn’t appear
You do not need --acl public-read for buckets with ACLs disabled (default for new S3 buckets)
            
