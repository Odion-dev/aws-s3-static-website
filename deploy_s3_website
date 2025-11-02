#!/bin/bash
BUCKET_NAME="my-capstone-project-2025"   
REGION="us-east-1"                    
WEBSITE_DIR="website_file"                   
INDEX_FILE="index.html"
ERROR_FILE="error.html"       

if [ ! -d "$WEBSITE_DIR" ]; then 
	  echo "Error: Folder '$WEBSITE_DIR' not found!"  
	    exit 1
fi


if [ ! -f "$WEBSITE_DIR/$ERROR_FILE" ]; then 
	echo "Creating default error.html..."
	  cat > "$WEBSITE_DIR/$ERROR_FILE" <<-EOF
                <!DOCTYPE html>
         	  <html>
	        <head><title>Error</title></head>
         	    <body><h1>Oops! Something went wrong.</h1></body>
 	        </html>
		EOF
fi		
		

echo "Creating S3 bucket: $BUCKET_NAME ..."
if [ "$REGION" = "us-east-1" ]; then
	  aws s3api create-bucket --bucket "$BUCKET_NAME" --region "$REGION"
  else
	    aws s3api create-bucket --bucket "$BUCKET_NAME" --region "$REGION" \
		        --create-bucket-configuration LocationConstraint="$REGION"
fi


echo "Disabling Block Public Access..."
aws s3api put-public-access-block --bucket "$BUCKET_NAME" \
  --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"


echo "Configuring static website hosting..."
aws s3 website "s3://$BUCKET_NAME/" --index-document $INDEX_FILE --error-document $ERROR_FILE

echo "Uploading website files from '$WEBSITE_DIR' ..." 
aws s3 cp "$WEBSITE_DIR" "s3://$BUCKET_NAME/" --recursive 

echo "Applying public read bucket policy..."
cat > policy.json <<EOF
{
	  "Version":"2012-10-17",
	    "Statement":[{
		        "Sid":"PublicReadGetObject",
			    "Effect":"Allow",
			        "Principal": "*",
				    "Action":["s3:GetObject"],
				        "Resource":["arn:aws:s3:::$BUCKET_NAME/*"]
					  }]
			  }
EOF
aws s3api put-bucket-policy --bucket "$BUCKET_NAME" --policy file://policy.json
rm -f policy.json

echo
echo "Your website is live at:" 
echo "http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
		  
