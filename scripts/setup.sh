#!/bin/bash

echo "🚀 Setting up CollabRx Landing Page..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p public/image
mkdir -p .docker
mkdir -p logs

# Set up Git hooks
echo "🎣 Setting up Git hooks..."
npx husky install

# Create placeholder images (optional)
echo "🖼️  Creating placeholder images..."
# You can add image generation logic here

echo "✅ Setup complete!"
echo "Run 'npm run dev' to start development server"
echo "Run 'npm run docker:dev' to start with Docker"
