#!/bin/bash

echo "🚀 Deploying CollabRx Landing Page..."

# Build the application
echo "🏗️  Building application..."
npm run build

# Build Docker image
echo "🐳 Building Docker image..."
docker build -t collabrx-landing:latest .

# Tag for production
docker tag collabrx-landing:latest collabrx-landing:production

echo "✅ Deployment ready!"
echo "Run 'docker run -p 3000:3000 collabrx-landing:latest' to start"
