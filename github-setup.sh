#!/bin/bash

# Load environment variables
source .env

echo "Setting up GitHub authentication..."

# Configure Git with the token
git config --global user.name "$(whoami)"
git config --global credential.helper store

# Test GitHub authentication
echo "Testing GitHub connection..."
curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/user

echo "GitHub setup complete!"
echo "Your token is securely stored in .env (excluded from git)"

# Usage examples
echo ""
echo "Usage examples:"
echo "1. Clone repo: git clone https://github.com/username/repo.git"
echo "2. API calls: curl -H \"Authorization: token \$GITHUB_TOKEN\" https://api.github.com/..."
echo "3. Deploy: Use GITHUB_TOKEN environment variable in scripts"